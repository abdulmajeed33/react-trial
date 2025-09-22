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

export interface HorizontalBarChartData {
  name: string;
  value: number;
  color?: string;
}

export interface LegendData {
  color: string;
  label: string;
}

export interface HorizontalBarChartProps {
  title: string;
  data: HorizontalBarChartData[];
  valueUnit?: '%' | '' | 'count'; // For tooltip formatting
  valueLabel: string; // Label for tooltip (e.g., 'Risk Level', 'Count')
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
  // Horizontal bar chart specific props
  defaultBarColor?: string; // Default color for bars when not specified in data
  barRadius?: [number, number, number, number]; // Bar border radius [topLeft, topRight, bottomRight, bottomLeft]
  yAxisWidth?: number; // Width for Y-axis labels
  xAxisTicks?: number[]; // Custom ticks for X-axis
  domain?: [number, number]; // Domain for X-axis values
}

export default function HorizontalBarChart({
  title,
  data,
  valueUnit = '%',
  valueLabel,
  height = 282,
  barCategoryGap = "10%",
  showLegend = false,
  legendItems,
  onRemoveWidget,
  onExportData,
  onSettings,
  onMagicClick,
  margin = { top: 20, right: 20, left: -60, bottom: 0 },
  defaultBarColor = "#FF5757",
  barRadius = [0, 8, 8, 0],
  yAxisWidth = 190,
  xAxisTicks = [0, 20, 40, 60, 80, 100],
  domain = [0, 100]
}: HorizontalBarChartProps) {
  
  // Default legend items if not provided and showLegend is true
  const defaultLegendItems: LegendData[] = [
    { color: "#2FD897", label: "Optimal" },
    { color: "#F59C0B", label: "Caution" },
    { color: "#FF5757", label: "Critical" }
  ];

  const finalLegendItems = legendItems || (showLegend ? defaultLegendItems : []);

  return (
    <div className="bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6 w-full h-full">
      <ChartHeader
        title={title}
        onRemoveWidget={onRemoveWidget}
        onExportData={onExportData}
        onSettings={onSettings}
        onMagicClick={onMagicClick}
      />

      <div 
        className="flex-1 bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl relative"
        style={{ minHeight: `${height}px` }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={margin}
            barCategoryGap={barCategoryGap}
          >
            <CartesianGrid
              strokeDasharray="2 2"
              stroke="#1F242F"
              horizontal={false} // Grid lines should match vertical layout
              vertical={true}
            />
            <XAxis
              type="number"
              domain={domain}
              axisLine={{ stroke: "#1F242F", strokeWidth: 1 }}
              tickLine={false}
              tick={{
                fill: "#B6BCC3",
                fontSize: 10,
                fontFamily: "Inter",
              }}
              ticks={xAxisTicks}
              interval={0}
              angle={0}
              textAnchor="middle"
              height={50}
              dy={15}
            />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#F1F3FF",
                fontSize: 10,
                fontFamily: "Inter",
                fontWeight: 400,
              }}
              width={yAxisWidth}
              interval={0}
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
              formatter={(value: number, _: string, props: { payload?: { name: string; value: number; color?: string } }) => {
                const entry = data.find(d => d.name === props.payload?.name);
                const displayValue = valueUnit === '%' ? `${value}%` : valueUnit === 'count' ? `${value}` : `${value}`;
                return [
                  <span style={{ color: entry?.color || defaultBarColor }}>
                    {displayValue}
                  </span>,
                  valueLabel
                ];
              }}
              labelFormatter={(label: string) => label}
            />
            <Bar
              dataKey="value"
              radius={barRadius}
              fill={`${defaultBarColor}1F`} // 12% opacity
              stroke={defaultBarColor}
              strokeWidth={1}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color ? `${entry.color}1F` : `${defaultBarColor}1F`}
                  stroke={entry.color || defaultBarColor}
                  strokeWidth={1}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend */}
      {showLegend && finalLegendItems.length > 0 && (
        <div className="flex items-center gap-4">
          {finalLegendItems.map((item, index) => (
            <LegendItem 
              key={index}
              color={item.color} 
              label={item.label} 
            />
          ))}
        </div>
      )}
    </div>
  );
} 