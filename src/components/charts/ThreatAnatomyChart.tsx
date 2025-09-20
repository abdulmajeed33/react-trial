import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
} from "recharts";
import { ChartHeader } from "../ui-components/ChartHeader";

type ChartData = {
  stage: number;
  vulnerabilities: number;
  misconfigurations: number;
};

// Data that creates the funnel effect - vulnerabilities decrease dramatically
const data: ChartData[] = [
  { stage: 0, vulnerabilities: 171000, misconfigurations: 161000 },
  { stage: 1, vulnerabilities: 15000, misconfigurations: 0 },
  { stage: 2, vulnerabilities: 3000, misconfigurations: 0 },
  { stage: 3, vulnerabilities: 127, misconfigurations: 0 },
];

type CustomTooltipProps = {
  active?: boolean;
  payload?: Array<{
    color: string;
    dataKey: string;
    value: number;
  }>;
  label?: number | string;
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background-dark-neutral-three border border-border-dark-neutral-three rounded-lg p-3 shadow-lg">
        <p className="text-text-dark-primary text-sm font-medium">
          Stage {typeof label === "number" ? label + 1 : label}
        </p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.dataKey === "vulnerabilities"
              ? "Vulnerabilities"
              : "Misconfigurations"}
            : {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ThreatAnatomyChart() {
  // Calculate the max value and create centered domain
  const maxVuln = Math.max(...data.map(d => d.vulnerabilities));
  const maxMisconfig = Math.max(...data.map(d => d.misconfigurations));
  const maxValue = Math.max(maxVuln, maxMisconfig);
  const padding = maxValue * 0.3; // 30% padding above and below
  
  return (
    <div className="bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6 w-full h-full">
      <ChartHeader
        title="Threat Anatomy : The Attack Path Funnel"
        onRemoveWidget={() => {}}
        onExportData={() => {}}
        onSettings={() => {}}
        onMagicClick={() => {}}
      />
      <div className="flex-1 bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl relative min-h-[300px] p-6">
        {/* Custom positioned labels */}
        <div className="absolute top-6 left-16 text-center z-10">
          <div className="text-white text-lg font-bold font-mono">171K</div>
          <div className="text-gray-400 text-xs">Total Vulnerabilities</div>
        </div>
        
        <div className="absolute top-6 left-1/3 text-center z-10">
          <div className="text-white text-lg font-bold font-mono">15K</div>
          <div className="text-gray-400 text-xs">Critical and High</div>
        </div>
        
        <div className="absolute top-6 left-2/3 text-center z-10">
          <div className="text-white text-lg font-bold font-mono">3K</div>
          <div className="text-gray-400 text-xs">Has Public Exploit</div>
        </div>
        
        <div className="absolute top-6 right-16 text-center z-10">
          <div className="text-white text-lg font-bold font-mono">127</div>
          <div className="text-gray-400 text-xs">Critical Attack Paths</div>
        </div>
        
        <div className="absolute bottom-6 left-16 text-center z-10">
          <div className="text-white text-lg font-bold font-mono">161K</div>
          <div className="text-gray-400 text-xs">Total Misconfiguration</div>
        </div>

        {/* Vertical divider lines */}
        <div className="absolute top-0 bottom-0 left-1/4 w-px opacity-50" style={{ 
          backgroundImage: 'repeating-linear-gradient(to bottom, #374151 0px, #374151 4px, transparent 4px, transparent 8px)' 
        }}></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-px opacity-50" style={{ 
          backgroundImage: 'repeating-linear-gradient(to bottom, #374151 0px, #374151 4px, transparent 4px, transparent 8px)' 
        }}></div>
        <div className="absolute top-0 bottom-0 left-3/4 w-px opacity-50" style={{ 
          backgroundImage: 'repeating-linear-gradient(to bottom, #374151 0px, #374151 4px, transparent 4px, transparent 8px)' 
        }}></div>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 60, right: 0, left: 0, bottom: 60 }}
          >
            {/* Guide lines - positioned relative to the centered data */}
            <ReferenceLine y={161000} stroke="#1F242F" strokeDasharray="5 5" strokeWidth={1} />
            <ReferenceLine y={0} stroke="#FF740A" strokeWidth={1} />

            {/* Hidden axes with centered domain */}
            <XAxis type="number" dataKey="stage" domain={[0, 3]} hide={true} />
            <YAxis 
              type="number" 
              domain={[-padding, maxValue + padding]} 
              hide={true} 
            />

            {/* Misconfigurations area (orange, bottom) */}
            <Area
              type="monotone"
              dataKey="misconfigurations"
              stroke="#FF740A"
              strokeWidth={2}
              fill="rgba(255, 116, 10, 0.3)"
              fillOpacity={1}
            />

            {/* Vulnerabilities area (red, top) */}
            <Area
              type="monotone"
              dataKey="vulnerabilities"
              stroke="#FF5757"
              strokeWidth={2}
              fill="rgba(255, 87, 87, 0.3)"
              fillOpacity={1}
            />

            <Tooltip content={<CustomTooltip />} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
