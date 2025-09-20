import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { ChartHeader } from '../ui-components/ChartHeader';

const data = [
  {
    name: 'CIS Benchmark 5.0',
    value: 90,
    color: '#2FD897'
  },
  {
    name: 'AWS Well-Architected', 
    value: 53,
    color: '#FF740A'
  }
];

const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-1">
    <div 
      className="w-2 h-2 rounded-sm"
      style={{ backgroundColor: color }}
    />
    <span className="text-text-dark-secondary text-extra-small">{label}</span>
  </div>
);

export default function ComplianceChart() {
  return (
    <div className="w-full h-full bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6">
      <ChartHeader title="Compliance" />
      
      <div className="h-[244px] relative bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            barCategoryGap="40%"
          >
            <CartesianGrid 
              strokeDasharray="2 2" 
              stroke="#1F242F" 
              horizontal={true}
              vertical={false}
            />
            <XAxis 
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ 
                fill: '#B6BCC3', 
                fontSize: 10,
                fontFamily: 'Inter'
              }}
              interval={0}
              angle={0}
              textAnchor="middle"
              height={40}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ 
                fill: '#B6BCC3', 
                fontSize: 10,
                fontFamily: 'Inter'
              }}
              domain={[0, 100]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            />
            <Bar 
              dataKey="value" 
              radius={[6, 6, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`${entry.color}1F`} stroke={entry.color} strokeWidth={1} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Custom Legend */}
      <div className="flex items-center gap-4 mt-3">
        <LegendItem color="#2FD897" label="Optimal" />
        <LegendItem color="#FF740A" label="Caution" />
        <LegendItem color="#FF5757" label="Critical" />
      </div>
    </div>
  );
} 