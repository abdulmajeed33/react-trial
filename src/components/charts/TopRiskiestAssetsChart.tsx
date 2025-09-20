import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { ChartHeader } from '../ui-components/ChartHeader';
import { LegendItem } from '../ui-components/LegendItem';

const data = [
  { name: 'Critical', value: 35, color: '#FF5757' },
  { name: 'High', value: 30, color: '#FF740A' },
  { name: 'Medium', value: 25, color: '#F59C0B' },
  { name: 'Low', value: 10, color: '#7988FF' },
];

export default function TopRiskiestAssetsChart() {
  return (
    <div className="bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6 w-full h-full" >
      <ChartHeader 
        title="Top Riskiest Assets"
        onRemoveWidget={() => console.log('Remove widget')}
        onExportData={() => console.log('Export data')}
        onSettings={() => console.log('Settings')}
        onMagicClick={() => console.log('Magic clicked for Top Riskiest Assets')}
      />

      <div className="flex-1 bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl p-4 relative h-[246px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              strokeWidth={3}
              fill="none"
            >
              {data.map((entry, index) => (
                <Pie
                  key={`segment-${index}`}
                  data={[entry]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  stroke={entry.color}
                  strokeWidth={3}
                  fill="none"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-4">
        <LegendItem color="#FF5757" label="Critical" />
        <LegendItem color="#FF740A" label="High" />
        <LegendItem color="#F59C0B" label="Medium" />
        <LegendItem color="#7988FF" label="Low" />
      </div>
    </div>
  );
}
