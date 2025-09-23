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

export interface AreaChartData {
  name: string;
  categories: ChartCategory[]; // Array of categories for each data series in order
  [key: string]: string | number | ChartCategory[]; // Allow dynamic keys for multiple data series
  // For example: { name: "Mar", mttd: 3, mttr: 10, categories: [ChartCategory.MTTD, ChartCategory.MTTR] }
}

export interface LegendData {
  category: ChartCategory;
  label: string;
}

export interface AreaChartProps {
  title: string;
  data: AreaChartData[];
  dataKeys: string[]; // Define which data keys to render as areas (e.g., ['mttd', 'mttr'])
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
  dataKeys,
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
  
  // Get categories from the first data point
  const seriesCategories = data.length > 0 ? data[0].categories : [];

  // Default legend items
  const defaultLegendItems: LegendData[] = [
    { category: ChartCategory.MTTD, label: "MTTD" },
    { category: ChartCategory.MTTR, label: "MTTR" },
  ];

  const finalLegendItems = legendItems || (showLegend ? defaultLegendItems : []);

  // Helper function to get color for a category
  const getColorForCategory = (category: ChartCategory): string => {
    return CATEGORY_COLORS[category];
  };

  // Generate gradient definitions for each series
  const gradientDefs = useGradients ? dataKeys.map((dataKey, index) => {
    const category = seriesCategories[index];
    const color = getColorForCategory(category);
    return (
      <linearGradient key={`gradient-${index}`} id={`${dataKey}Gradient`} x1="0" y1="0" x2="0" y2="1">
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
                const dataKeyIndex = dataKeys.findIndex(key => key === name);
                const category = dataKeyIndex >= 0 ? seriesCategories[dataKeyIndex] : undefined;
                const color = category ? getColorForCategory(category) : '#ffffff';
                const displayName = dataKeyIndex >= 0 ? (name === 'mttd' ? 'MTTD' : name === 'mttr' ? 'MTTR' : name) : name;
                
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
            {dataKeys.slice().reverse().map((dataKey, reverseIndex) => {
              const originalIndex = dataKeys.length - 1 - reverseIndex;
              const category = seriesCategories[originalIndex];
              const color = getColorForCategory(category);
              const fillValue = useGradients ? `url(#${dataKey}Gradient)` : `${color}1F`;
              
                              return (
                  <Area
                    key={dataKey}
                    type={areaType}
                    dataKey={dataKey}
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
            const color = CATEGORY_COLORS[item.category];
            
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