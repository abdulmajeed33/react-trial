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
import { LegendItem } from "../../ui-components/LegendItem";
import { ChartCategory, CATEGORY_COLORS } from "./chartConstants";

export interface HorizontalBarChartData {
  name: string;
  value: number;
  category?: ChartCategory; // Optional for backward compatibility
}

export interface LegendData {
  category: ChartCategory;
  label: string;
}

export interface HorizontalBarChartProps {
  data: HorizontalBarChartData[];
  valueUnit?: '%' | '' | 'count'; // For tooltip formatting
  valueLabel: string; // Label for tooltip (e.g., 'Risk Level', 'Count')
  height?: number; // Chart container height
  barCategoryGap?: string; // Gap between bars
  showLegend?: boolean;
  legendItems?: LegendData[];
  margin?: {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
  };
  // Horizontal bar chart specific props
  defaultBarColor?: string; // Default color for bars when category is not specified
  barRadius?: [number, number, number, number]; // Bar border radius [topLeft, topRight, bottomRight, bottomLeft]
  yAxisWidth?: number; // Width for Y-axis labels
  xAxisTicks?: number[]; // Custom ticks for X-axis
  domain?: [number, number]; // Domain for X-axis values
}

export default function HorizontalBarChart({
  data,
  valueUnit = '%',
  valueLabel,
  height = 282,
  barCategoryGap = "10%",
  showLegend = false,
  legendItems,
  margin = { top: 20, right: 20, left: -60, bottom: 0 },
  defaultBarColor = "#FF5757",
  barRadius = [0, 8, 8, 0],
  yAxisWidth = 190,
  xAxisTicks = [0, 20, 40, 60, 80, 100],
  domain = [0, 100]
}: HorizontalBarChartProps) {
  
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
    <div className="flex flex-col gap-6 w-full h-full">
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
            <Bar
              dataKey="value"
              radius={barRadius}
            >
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