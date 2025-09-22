import React from 'react';
import HorizontalBarChart, { type HorizontalBarChartData } from './common/HorizontalBarChart';

// Mock data based on Figma design
const topAttackVectorsData: HorizontalBarChartData[] = [
  { name: 'Phishing', value: 85, color: '#FF5757' },
  { name: 'Malware', value: 72, color: '#FF5757' },
  { name: 'Web Attack', value: 45, color: '#FF5757' },
  { name: 'Insider Threat', value: 58, color: '#FF5757' },
];

export default function TopAttackVectorsChart() {
  return (
    <HorizontalBarChart
      title="Top Attack Vectors"
      data={topAttackVectorsData}
      valueUnit="%"
      valueLabel="Threat Level"
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
      onMagicClick={() => console.log("Magic clicked for Top Attack Vectors")}
    />
  );
} 