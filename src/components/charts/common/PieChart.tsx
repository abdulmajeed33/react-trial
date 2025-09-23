import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartHeader } from '../../ui-components/ChartHeader';
import { LegendItem } from '../../ui-components/LegendItem';
import { ChartCategory, CATEGORY_COLORS } from './chartConstants';

export interface PieChartData {
  name: string;
  value: number;
  category?: ChartCategory;
  [key: string]: string | number | undefined; // Index signature for Recharts compatibility
}

export interface LegendData {
  category: ChartCategory;
  label: string;
}

export interface PieChartProps {
  title: string;
  data: PieChartData[];
  valueUnit?: '%' | '' | 'count'; // For tooltip formatting
  valueLabel: string; // Label for tooltip (e.g., 'Risk Level', 'Assets Count')
  height?: number; // Chart container height
  innerRadius?: number; // Inner radius for donut chart
  outerRadius?: number; // Outer radius
  paddingAngle?: number; // Padding between segments
  showLegend?: boolean;
  legendItems?: LegendData[];
  defaultPieColor?: string; // Default color for segments when no category is provided
  onRemoveWidget?: () => void;
  onExportData?: () => void;
  onSettings?: () => void;
  onMagicClick?: () => void;
}

export default function PieChart({
  title,
  data,
  valueUnit = '%',
  valueLabel,
  height = 244,
  innerRadius = 70,
  outerRadius = 100,
  paddingAngle = 2,
  showLegend = true,
  legendItems,
  defaultPieColor = "#FF5757",
  onRemoveWidget,
  onExportData,
  onSettings,
  onMagicClick,
}: PieChartProps) {
  
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
      return CATEGORY_COLORS[category] || defaultPieColor;
    }
    return defaultPieColor;
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
        className="bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl relative flex items-center justify-center"
        style={{ height: `${height}px` }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={paddingAngle}
              dataKey="value"
              strokeWidth={0}
              fill="transparent"
            >
              {data.map((entry, index) => {
                const color = getColorForCategory(entry.category);
                return (
                  <Cell 
                    key={`cell-${index}`} 
                    stroke={color} 
                    strokeWidth={1}
                    fill={`${color}1F`} // 12% opacity background
                  />
                );
              })}
            </Pie>
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
                const color = entry ? getColorForCategory(entry.category) : defaultPieColor;
                return [
                  <span style={{ color }}>
                    {displayValue}
                  </span>,
                  valueLabel
                ];
              }}
              labelFormatter={(label: string) => label}
            />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend */}
      {showLegend && finalLegendItems.length > 0 && (
        <div className="flex gap-4">
          {finalLegendItems.map((item, index) => {
            const color = getColorForCategory(item.category);
            return (
              <LegendItem 
                key={index}
                color={color} 
                label={item.label} 
              />
            );
          })}
        </div>
      )}
    </div>
  );
} 