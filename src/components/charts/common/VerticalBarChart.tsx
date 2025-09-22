import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";
import { useState } from "react";
import { ChartHeader } from "../../ui-components/ChartHeader";
import { LegendItem } from "../../ui-components/LegendItem";

export interface BarChartData {
  name: string;
  value: number;
  color: string;
  category?: string; // Add category field to map data to legend items
}

export interface LegendData {
  color: string;
  label: string;
  category?: string; // Add category field to map legend to data
}

export interface VerticalBarChartProps {
  title: string;
  data: BarChartData[];
  valueUnit?: '%' | '' | 'count'; // For tooltip formatting
  valueLabel: string; // Label for tooltip (e.g., 'Compliance Score', 'Assets Count')
  height?: number; // Chart container height
  barCategoryGap?: string; // Gap between bars
  showLegend?: boolean;
  legendItems?: LegendData[];
  onRemoveWidget?: () => void;
  onExportData?: () => void;
  onSettings?: () => void;
  onMagicClick?: () => void;
  margin?: {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
  };
}

export default function VerticalBarChart({
  title,
  data,
  valueUnit = '%',
  valueLabel,
  height = 244,
  barCategoryGap = "28%",
  showLegend = true,
  legendItems,
  onRemoveWidget,
  onExportData,
  onSettings,
  onMagicClick,
  margin = { top: 20, right: 20, left: 0, bottom: 0 }
}: VerticalBarChartProps) {
  
  // Default legend items if not provided and showLegend is true
  const defaultLegendItems: LegendData[] = [
    { color: "#2FD897", label: "Optimal", category: "optimal" },
    { color: "#F59C0B", label: "Caution", category: "caution" },
    { color: "#FF5757", label: "Critical", category: "critical" }
  ];

  const finalLegendItems = legendItems || (showLegend ? defaultLegendItems : []);
  
  // State to track active legend items (initially all are active)
  const [activeLegendItems, setActiveLegendItems] = useState<Set<string>>(
    new Set(finalLegendItems.map((item, index) => item.category || item.label || index.toString()))
  );

  // Function to handle legend item click
  const handleLegendClick = (item: LegendData, index: number) => {
    const itemKey = item.category || item.label || index.toString();
    setActiveLegendItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemKey)) {
        // If it's the last active item, don't deactivate it
        if (newSet.size > 1) {
          newSet.delete(itemKey);
        }
      } else {
        newSet.add(itemKey);
      }
      return newSet;
    });
  };

  // Filter data based on active legend items
  const filteredData = data.filter(dataItem => {
    // If no category mapping is provided, show all data
    if (!finalLegendItems.some(item => item.category)) {
      return true;
    }
    
    // Check if this data item's category/color matches any active legend item
    const matchingLegendItem = finalLegendItems.find(legendItem => 
      (legendItem.category && dataItem.category === legendItem.category) ||
      (legendItem.color === dataItem.color)
    );
    
    if (matchingLegendItem) {
      const itemKey = matchingLegendItem.category || matchingLegendItem.label;
      return activeLegendItems.has(itemKey);
    }
    
    return true; // Show items that don't match any legend category
  });

  return (
    <div className="w-full h-full bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6">
      <ChartHeader
        title={title}
        onRemoveWidget={onRemoveWidget}
        onExportData={onExportData}
        onSettings={onSettings}
        onMagicClick={onMagicClick}
      />
      
      <div 
        className="relative bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl"
        style={{ height: `${height}px` }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={filteredData}
            margin={margin}
            barCategoryGap={barCategoryGap}
          >
            <CartesianGrid
              strokeDasharray="2 2"
              stroke="#1F242F"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={{ stroke: "#1F242F", strokeWidth: 1 }}
              tickLine={false}
              tick={{
                fill: "#B6BCC3",
                fontSize: 10,
                fontFamily: "Inter",
              }}
              interval={0}
              angle={0}
              textAnchor="middle"
              height={50}
              dy={15}
            />
            <YAxis
              axisLine={{ stroke: "#1F242F", strokeWidth: 1 }}
              tickLine={false}
              tick={{
                fill: "#B6BCC3",
                fontSize: 10,
                fontFamily: "Inter",
              }}
              domain={[0, 100]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              interval={0}
              width={40}
            />
            <Tooltip
              cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
              contentStyle={{
                backgroundColor: '#0E131C',
                border: '1px solid #161B26',
                borderRadius: '8px',
                padding: '8px 12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                color: '#ffffff'
              }}
              itemStyle={{
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: '500',
                fontFamily: 'Inter'
              }}
              labelStyle={{
                color: '#cccccc',
                fontSize: '11px',
                fontWeight: '500',
                marginBottom: '4px',
                fontFamily: 'Inter'
              }}
              formatter={(value: number, _: string, props: { payload?: { name: string; value: number; color: string } }) => {
                const entry = filteredData.find(d => d.name === props.payload?.name);
                const displayValue = valueUnit === '%' ? `${value}%` : valueUnit === 'count' ? `${value}` : `${value}`;
                return [
                  <span style={{ color: entry?.color || '#ffffff' }}>
                    {displayValue}
                  </span>,
                  valueLabel
                ];
              }}
              labelFormatter={(label: string) => label}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {filteredData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`${entry.color}1F`}
                  stroke={entry.color}
                  strokeWidth={1}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend with Click Functionality */}
      {showLegend && finalLegendItems.length > 0 && (
        <div className="flex items-center gap-4">
          {finalLegendItems.map((item, index) => {
            const itemKey = item.category || item.label || index.toString();
            const isActive = activeLegendItems.has(itemKey);
            
            return (
              <div
                key={index}
                onClick={() => handleLegendClick(item, index)}
                className={`cursor-pointer transition-opacity duration-200 ${
                  isActive ? 'opacity-100' : 'opacity-40'
                }`}
                title={`Click to ${isActive ? 'hide' : 'show'} ${item.label}`}
              >
                <LegendItem 
                  color={item.color} 
                  label={item.label} 
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
} 