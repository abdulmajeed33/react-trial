import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';
import { ChartHeader } from '../ui-components/ChartHeader';

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
    <div className="bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6 w-full h-full">
      {/* Header */}
      <ChartHeader 
        title="MTTD & MTTR Trends"
        onRemoveWidget={() => console.log('Remove widget')}
        onExportData={() => console.log('Export data')}
        onSettings={() => console.log('Settings')}
      />

      {/* Chart Container */}
      <div className="flex-1 bg-background-dark-neutral-two border border-border-dark-neutral-neutral rounded-xl p-4 relative">
        {/* Chart */}
        <div className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            >
              {/* Gradients */}
              <defs>
                {/* MTTD Blue Gradient */}
                <linearGradient id="mttdGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7988FF" stopOpacity={1} />
                  <stop offset="100%" stopColor="rgba(121, 136, 255, 0)" stopOpacity={0} />
                </linearGradient>
                
                {/* MTTR Gold/Yellow Gradient */}
                <linearGradient id="mttrGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59C0B" stopOpacity={1} />
                  <stop offset="100%" stopColor="rgba(245, 156, 11, 0)" stopOpacity={0} />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[2, 4, 6, 8, 10].map((value) => (
                <ReferenceLine 
                  key={value}
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
        {/* MTTD Legend Item */}
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-[#7988FF] rounded-sm"></div>
          <span className="text-text-dark-secondary text-extra-small font-normal">
            MTTD
          </span>
        </div>

        {/* MTTR Legend Item */}
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-[#F59C0B] rounded-sm"></div>
          <span className="text-text-dark-secondary text-extra-small font-normal">
            MTTR
          </span>
        </div>
      </div>
    </div>
  );
};

export default MTTDMTTRChart; 