import HorizontalBarChart, { type HorizontalBarChartData } from './common/HorizontalBarChart';
import { ChartHeader } from '../ui-components/ChartHeader';

// Mock data based on Figma design
const topAttackVectorsData: HorizontalBarChartData[] = [
  { name: 'Phishing', value: 85 },
  { name: 'Malware', value: 72 },
  { name: 'Web Attack', value: 45 },
  { name: 'Insider Threat', value: 58 },
];

export default function TopAttackVectorsChart() {
  return (
    <div className="w-full h-full bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6">
      <ChartHeader
        title="Top Attack Vectors"
        onRemoveWidget={() => console.log("Remove widget")}
        onExportData={() => console.log("Export data")}
        onSettings={() => console.log("Settings")}
        onMagicClick={() => console.log("Magic clicked for Top Attack Vectors")}
      />
      
      <HorizontalBarChart
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
      />
    </div>
  );
} 