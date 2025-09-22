import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartHeader } from '../../ui-components/ChartHeader';
import { LegendItem } from '../../ui-components/LegendItem';

export interface PieChartData {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number; // Index signature for Recharts compatibility
}

export interface LegendData {
  color: string;
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
  onRemoveWidget,
  onExportData,
  onSettings,
  onMagicClick,
}: PieChartProps) {
  
  // Default legend items if not provided and showLegend is true
  const defaultLegendItems: LegendData[] = data.map(item => ({
    color: item.color,
    label: item.name
  }));

  const finalLegendItems = legendItems || (showLegend ? defaultLegendItems : []);

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
        className="flex-1 bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl p-4 relative flex items-center justify-center"
        style={{ minHeight: `${height}px` }}
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
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  stroke={entry.color} 
                  strokeWidth={1}
                  fill={`${entry.color}1F`} // 12% opacity background
                />
              ))}
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
              formatter={(value: number, _: string, props: { payload?: { name: string; value: number; color: string } }) => {
                const entry = data.find(d => d.name === props.payload?.name);
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
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend */}
      {showLegend && finalLegendItems.length > 0 && (
        <div className="flex gap-4">
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