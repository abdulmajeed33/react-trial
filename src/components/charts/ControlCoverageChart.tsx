import HorizontalBarChart, { type HorizontalBarChartData } from './common/HorizontalBarChart';
import { ChartHeader } from '../ui-components/ChartHeader';

// Mock data based on Figma design
const controlCoverageData: HorizontalBarChartData[] = [
  { name: 'Antivirus', value: 92 },
  { name: 'Firewall', value: 78 },
  { name: 'SIEM', value: 65 },
  { name: 'WAF', value: 88 },
  { name: 'VA', value: 95 },
];



export default function ControlCoverageChart() {
  return (
    <div className="w-full h-full bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6">
      <ChartHeader
        title="Control Coverage"
        onRemoveWidget={() => console.log("Remove widget")}
        onExportData={() => console.log("Export data")}
        onSettings={() => console.log("Settings")}
        onMagicClick={() => console.log("Magic clicked for Control Coverage")}
      />
      
      <HorizontalBarChart
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
      />
    </div>
  );
} 