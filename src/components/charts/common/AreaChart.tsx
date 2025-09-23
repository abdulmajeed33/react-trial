import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  ReferenceLine,
} from "recharts";
import { ChartHeader } from "../../ui-components/ChartHeader";
import { LegendItem } from "../../ui-components/LegendItem";
import { ChartCategory, CATEGORY_COLORS } from "./chartConstants";

export interface AreaChartDataSeries {
  dataKey: string;
  name: string;
  color: string;
  category?: ChartCategory;
}

export interface AreaChartData {
  name: string;
  [key: string]: string | number; // Allow dynamic keys for multiple data series
}

export interface LegendData {
  category?: ChartCategory;
  label: string;
  color?: string; // Allow custom color override
}

export interface AreaChartProps {
  title: string;
  data: AreaChartData[];
  dataSeries: AreaChartDataSeries[]; // Define which data keys to render as areas
  valueUnit?: '%' | 'hrs' | 'count' | ''; // For tooltip formatting
  height?: number; // Chart container height
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
  // Area chart specific props
  areaType?: "linear" | "monotone" | "step" | "stepBefore" | "stepAfter";
  strokeWidth?: number;
  showDots?: boolean;
  showActiveDots?: boolean;
  yAxisTicks?: number[]; // Custom ticks for Y-axis
  domain?: [number, number]; // Domain for Y-axis values
  gridLines?: {
    horizontal?: boolean;
    vertical?: boolean;
  };
  referenceLines?: number[]; // Horizontal reference lines
  yAxisFormatter?: (value: number) => string; // Custom Y-axis label formatter
  fillOpacity?: number; // Opacity for area fills
  useGradients?: boolean; // Whether to use gradient fills
}

export default function AreaChart({
  title,
  data,
  dataSeries,
  valueUnit = '',
  height = 246,
  showLegend = true,
  legendItems,
  onRemoveWidget,
  onExportData,
  onSettings,
  onMagicClick,
  margin = { top: 0, right: 0, left: 0, bottom: 0 },
  areaType = "monotone",
  strokeWidth = 1,
  showDots = false,
  showActiveDots = false,
  yAxisTicks = [0, 2, 4, 6, 8, 10],
  domain = [0, 10],
  gridLines = { horizontal: true, vertical: true },
  referenceLines = [],
  yAxisFormatter,
  fillOpacity = 1,
  useGradients = true
}: AreaChartProps) {
  
  // Generate legend items from data series if not provided
  const defaultLegendItems: LegendData[] = dataSeries.map(series => ({
    label: series.name,
    color: series.color,
    category: series.category
  }));

  const finalLegendItems = legendItems || (showLegend ? defaultLegendItems : []);

  // Helper function to get color for a category or use provided color
  const getColorForSeries = (series: AreaChartDataSeries): string => {
    if (series.category) {
      return CATEGORY_COLORS[series.category] || series.color;
    }
    return series.color;
  };

  // Generate gradient definitions for each series
  const gradientDefs = useGradients ? dataSeries.map((series, index) => {
    const color = getColorForSeries(series);
    return (
      <linearGradient key={`gradient-${index}`} id={`${series.dataKey}Gradient`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity={0.2} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    );
  }) : [];

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
        className="bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl p-4 relative"
        style={{ height: `${height}px` }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RechartsAreaChart
            data={data}
            margin={margin}
          >
            {/* Gradients */}
            {useGradients && (
              <defs>
                {gradientDefs}
              </defs>
            )}

            {/* Grid Lines */}
            <CartesianGrid
              strokeDasharray="2 2"
              stroke="#1F242F"
              strokeWidth={1}
              horizontal={gridLines.horizontal}
              vertical={gridLines.vertical}
            />

            {/* Reference Lines */}
            {referenceLines.map((value) => (
              <ReferenceLine 
                key={`horizontal-${value}`}
                y={value} 
                stroke="#1F242F" 
                strokeDasharray="2 2"
                strokeWidth={1}
              />
            ))}

            {/* X Axis */}
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#B6BCC3",
                fontSize: 10,
                fontFamily: "Inter",
                fontWeight: 400
              }}
              dy={10}
            />

            {/* Y Axis */}
            <YAxis
              domain={domain}
              ticks={yAxisTicks}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#B6BCC3",
                fontSize: 10,
                fontFamily: "Inter",
                fontWeight: 400
              }}
              tickFormatter={yAxisFormatter}
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
              formatter={(value: number, name: string) => {
                const series = dataSeries.find(s => s.dataKey === name);
                const color = series ? getColorForSeries(series) : '#ffffff';
                const displayName = series ? series.name : name;
                
                let displayValue = `${value}`;
                if (valueUnit === '%') displayValue = `${value}%`;
                else if (valueUnit === 'hrs') displayValue = `${value} hr${value === 1 ? '' : 's'}`;
                else if (valueUnit === 'count') displayValue = `${value}`;
                else if (valueUnit) displayValue = `${value} ${valueUnit}`;

                return [
                  <span style={{ color }}>
                    {displayValue}
                  </span>,
                  displayName
                ];
              }}
            />

            {/* Areas - render in reverse order so first series appears on top */}
            {dataSeries.slice().reverse().map((series) => {
              const color = getColorForSeries(series);
              const fillValue = useGradients ? `url(#${series.dataKey}Gradient)` : `${color}1F`;
              
              return (
                <Area
                  key={series.dataKey}
                  type={areaType}
                  dataKey={series.dataKey}
                  stroke={color}
                  strokeWidth={strokeWidth}
                  fill={fillValue}
                  fillOpacity={fillOpacity}
                  dot={showDots}
                  activeDot={showActiveDots}
                />
              );
            })}
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>

      {/* Static Legend */}
      {showLegend && finalLegendItems.length > 0 && (
        <div className="flex items-center gap-4">
          {finalLegendItems.map((item, index) => {
            const color = item.color || (item.category ? CATEGORY_COLORS[item.category] : '#ffffff');
            
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