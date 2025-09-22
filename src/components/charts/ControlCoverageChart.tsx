import React from 'react';
import HorizontalBarChart, { type HorizontalBarChartData } from './common/HorizontalBarChart';

// Mock data based on Figma design
const controlCoverageData: HorizontalBarChartData[] = [
  { name: 'Antivirus', value: 92, color: '#FF5757' },
  { name: 'Firewall', value: 78, color: '#FF5757' },
  { name: 'SIEM', value: 65, color: '#FF5757' },
  { name: 'WAF', value: 88, color: '#FF5757' },
  { name: 'VA', value: 95, color: '#FF5757' },
];


export default function ControlCoverageChart() {
  return (
    <HorizontalBarChart
      title="Control Coverage"
      data={controlCoverageData}
      valueUnit="%"
      valueLabel="Coverage"
      height={226}
      defaultBarColor="#FF5757"
      barRadius={[0, 8, 8, 0]}
      yAxisWidth={190}
      xAxisTicks={[0, 20, 40, 60, 80, 100]}
      domain={[0, 100]}
      margin={{ top: 20, right: 20, left: -100, bottom: 0 }}
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Control Coverage")}
    />
  );
} 