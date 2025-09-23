import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ChartHeader } from "../../ui-components/ChartHeader";
import { LegendItem } from "../../ui-components/LegendItem";
import { ChartCategory, CATEGORY_COLORS } from "./chartConstants";

export interface LineChartData {
  name: string;
  value: number;
  category?: ChartCategory;
}

export interface LegendData {
  category: ChartCategory;
  label: string;
}

export interface LineChartProps {
  title: string;
  data: LineChartData[];
  valueUnit?: '%' | '' | 'count'; // For tooltip formatting
  valueLabel: string; // Label for tooltip (e.g., 'Security Score', 'Count')
  height?: number; // Chart container height
  showLegend?: boolean;
  legendItems?: LegendData[];
  defaultLineColor?: string; // Default color for line when no category is provided
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
  // Line chart specific props
  lineType?: "linear" | "monotone" | "step" | "stepBefore" | "stepAfter";
  strokeWidth?: number;
  showDots?: boolean;
  showActiveDot?: boolean;
  yAxisTicks?: number[]; // Custom ticks for Y-axis
  domain?: [number, number]; // Domain for Y-axis values
  gridLines?: {
    horizontal?: boolean;
    vertical?: boolean;
  };
}

export default function LineChart({
  title,
  data,
  valueUnit = '%',
  valueLabel,
  height = 282,
  showLegend = false,
  legendItems,
  defaultLineColor = "#7988FF",
  onRemoveWidget,
  onExportData,
  onSettings,
  onMagicClick,
  margin = { top: 20, right: 20, left: 0, bottom: 0 },
  lineType = "monotone",
  strokeWidth = 2,
  showDots = false,
  showActiveDot = false,
  yAxisTicks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  domain = [0, 100],
  gridLines = { horizontal: true, vertical: true }
}: LineChartProps) {
  
  // Default legend items if not provided and showLegend is true
  const defaultLegendItems: LegendData[] = [
    { category: ChartCategory.OPTIMAL, label: "Optimal" },
    { category: ChartCategory.CAUTION, label: "Caution" },
    { category: ChartCategory.CRITICAL, label: "Critical" }
  ];

  const finalLegendItems = legendItems || (showLegend ? defaultLegendItems : []);

  // Helper function to get color for a category - use first data point's category or default
  const getLineColor = (): string => {
    const firstDataPoint = data[0];
    if (firstDataPoint?.category) {
      return CATEGORY_COLORS[firstDataPoint.category] || defaultLineColor;
    }
    return defaultLineColor;
  };

  const lineColor = getLineColor();

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
        className="bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl relative"
        style={{ height: `${height}px` }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={data}
            margin={margin}
          >
            {/* Grid Lines */}
            <CartesianGrid
              strokeDasharray="2 2"
              stroke="#1F242F"
              horizontal={gridLines.horizontal}
              vertical={gridLines.vertical}
            />

            {/* X Axis */}
            <XAxis
              dataKey="name"
              axisLine={false}
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

            {/* Y Axis */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#B6BCC3",
                fontSize: 10,
                fontFamily: "Inter",
              }}
              domain={domain}
              ticks={yAxisTicks}
              interval={0}
              dx={-10}
            />

            <Tooltip
              cursor={{ stroke: "none" }}
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
              formatter={(value: number) => {
                const displayValue = valueUnit === '%' ? `${value}%` : valueUnit === 'count' ? `${value}` : `${value}`;
                return [
                  <span style={{ color: lineColor }}>
                    {displayValue}
                  </span>,
                  valueLabel
                ];
              }}
            />

            {/* Line */}
            <Line
              type={lineType}
              dataKey="value"
              stroke={lineColor}
              strokeWidth={strokeWidth}
              dot={showDots}
              activeDot={showActiveDot}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>

      {/* Static Legend */}
      {showLegend && finalLegendItems.length > 0 && (
        <div className="flex items-center gap-4">
          {finalLegendItems.map((item, index) => {
            const color = CATEGORY_COLORS[item.category] || defaultLineColor;
            
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