import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine, CartesianGrid, Tooltip } from 'recharts';
import { ChartHeader } from '../ui-components/ChartHeader';
import { LegendItem } from '../ui-components/LegendItem';

// Chart data based on the Figma design - MTTD (blue) and MTTR (gold/yellow)
const chartData = [
  { month: 'Mar', mttd: 3, mttr: 10 },
  { month: 'Apr', mttd: 2, mttr: 8 },
  { month: 'May', mttd: 5.5, mttr: 5 },
  { month: 'Jun', mttd: 6, mttr: 6.5 },
  { month: 'Jul', mttd: 5, mttr: 10 },
  { month: 'Aug', mttd: 3, mttr: 9 }
];

const MTTDMTTRChart: React.FC = () => {
  return (
    <div className="bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6 w-full" style={{ height: '358px' }}>
      {/* Header */}
      <ChartHeader 
        title="MTTD & MTTR Trends"
        onRemoveWidget={() => console.log('Remove widget')}
        onExportData={() => console.log('Export data')}
        onSettings={() => console.log('Settings')}
        onMagicClick={() => console.log('Magic clicked for MTTD & MTTR Trends')}
      />

      {/* Chart Container */}
      <div className="flex-1 bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl p-4 relative min-h-[246px]">
        {/* Chart */}
        <div className="h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
  <AreaChart
    data={chartData}
    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
  >
    {/* Gradients */}
    <defs>
      {/* MTTD Blue Gradient */}
      <linearGradient id="mttdGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7988FF" stopOpacity={0.2} />
        <stop offset="100%" stopColor="#7988FF" stopOpacity={0} />
      </linearGradient>
      
      {/* MTTR Gold/Yellow Gradient */}
      <linearGradient id="mttrGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F59C0B" stopOpacity={0.2} />
        <stop offset="100%" stopColor="#F59C0B" stopOpacity={0} />
      </linearGradient>
    </defs>

    {/* Grid Lines */}
    <CartesianGrid 
      strokeDasharray="2 2"
      stroke="#1F242F"
      strokeWidth={1}
      horizontal={true}
      vertical={true}
    />

    {/* Horizontal Reference Lines for specific values */}
    {[2, 4, 6, 8, 10].map((value) => (
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
      dataKey="month"
      axisLine={false}
      tickLine={false}
      tick={{
        fill: '#B6BCC3',
        fontSize: 10,
        fontFamily: 'Inter',
        fontWeight: 400
      }}
      dy={10}
    />

    {/* Y Axis */}
    <YAxis 
      domain={[0, 10]}
      ticks={[0, 2, 4, 6, 8, 10]}
      axisLine={false}
      tickLine={false}
      tick={{
        fill: '#B6BCC3',
        fontSize: 10,
        fontFamily: 'Inter',
        fontWeight: 400
      }}
      tickFormatter={(value) => `${value} hr${value === 1 ? '' : 's'}`}
      dx={-10}
    />

    {/* Tooltip with dark theme styling */}
    <Tooltip 
      cursor={{ stroke: 'none' }}
      contentStyle={{
        backgroundColor: '#0E131C',
        border: '1px solid #161B26',
        borderRadius: '8px',
        padding: '8px 12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        color: '#ffffff'
      }}
      itemStyle={{
        fontSize: '12px',
        fontWeight: '600',
        fontFamily: 'Inter'
      }}
      labelStyle={{
        color: '#cccccc', // Light gray for label
        fontSize: '11px',
        fontWeight: '500',
        marginBottom: '4px',
        fontFamily: 'Inter'
      }}
      formatter={(value: number, name: string) => {
        const formattedValue = `${value} hr${value === 1 ? '' : 's'}`;
        const color = name === 'mttd' ? '#7988FF' : '#F59C0B';
        return [
          <span style={{ color }}>{formattedValue}</span>,
          name === 'mttd' ? 'MTTD' : 'MTTR'
        ];
      }}
    />

    {/* MTTR Area (Gold/Yellow) - Behind MTTD */}
    <Area
      type="monotone"
      dataKey="mttr"
      stroke="#F59C0B"
      strokeWidth={1}
      fill="url(#mttrGradient)"
      fillOpacity={1}
      dot={false}
      activeDot={false}
    />

    {/* MTTD Area (Blue) - In front */}
    <Area
      type="monotone"
      dataKey="mttd"
      stroke="#7988FF"
      strokeWidth={1}
      fill="url(#mttdGradient)"
      fillOpacity={1}
      dot={false}
      activeDot={false}
    />
  </AreaChart>
</ResponsiveContainer>

        </div>
      </div>

      {/* Custom Legend */}
      <div className="flex gap-4">
        <LegendItem color="#7988FF" label="MTTD" />
        <LegendItem color="#F59C0B" label="MTTR" />
      </div>
    </div>
  );
};

export default MTTDMTTRChart; 