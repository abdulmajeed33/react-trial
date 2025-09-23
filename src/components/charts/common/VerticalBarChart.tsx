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
import { ChartHeader } from "../../ui-components/ChartHeader";
import { LegendItem } from "../../ui-components/LegendItem";
import { ChartCategory, CATEGORY_COLORS } from "./chartConstants";

export interface BarChartData {
  name: string;
  value: number;
  category?: ChartCategory;
}

export interface LegendData {
  category: ChartCategory;
  label: string;
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
  defaultBarColor?: string; // Default color for bars when no category is provided
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
  defaultBarColor = "#FF5757",
  onRemoveWidget,
  onExportData,
  onSettings,
  onMagicClick,
  margin = { top: 20, right: 20, left: 0, bottom: 0 }
}: VerticalBarChartProps) {
  
  // Default legend items if not provided and showLegend is true
  const defaultLegendItems: LegendData[] = [
    { category: ChartCategory.OPTIMAL, label: "Optimal" },
    { category: ChartCategory.CAUTION, label: "Caution" },
    { category: ChartCategory.CRITICAL, label: "Critical" }
  ];

  const finalLegendItems = legendItems || (showLegend ? defaultLegendItems : []);

  // Helper function to get color for a category
  const getColorForCategory = (category?: ChartCategory): string => {
    if (category) {
      return CATEGORY_COLORS[category] || defaultBarColor;
    }
    return defaultBarColor;
  };

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
            data={data}
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
              formatter={(value: number, _: string, props: { payload?: { name: string; value: number; category?: ChartCategory } }) => {
                const entry = data.find(d => d.name === props.payload?.name);
                const displayValue = valueUnit === '%' ? `${value}%` : valueUnit === 'count' ? `${value}` : `${value}`;
                const color = entry ? getColorForCategory(entry.category) : defaultBarColor;
                return [
                  <span style={{ color }}>
                    {displayValue}
                  </span>,
                  valueLabel
                ];
              }}
              labelFormatter={(label: string) => label}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => {
                const color = getColorForCategory(entry.category);
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={`${color}1F`}
                    stroke={color}
                    strokeWidth={1}
                  />
                );
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Static Legend */}
      {showLegend && finalLegendItems.length > 0 && (
        <div className="flex items-center gap-4">
          {finalLegendItems.map((item, index) => {
            const color = getColorForCategory(item.category);
            
            return (
              <div key={index}>
                <LegendItem 
                  color={color} 
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