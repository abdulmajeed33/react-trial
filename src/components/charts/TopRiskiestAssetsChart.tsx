import PieChart from './common/PieChart';
import type { PieChartData, LegendData } from './common/PieChart';
import { ChartCategory } from './common/chartConstants';
import { ChartHeader } from '../ui-components/ChartHeader';

export default function TopRiskiestAssetsChart() {
  
  const data: PieChartData[] = [
    { name: 'Critical', value: 35, category: ChartCategory.CRITICAL },
    { name: 'High', value: 30, category: ChartCategory.HIGH },
    { name: 'Medium', value: 25, category: ChartCategory.MEDIUM },
    { name: 'Low', value: 10, category: ChartCategory.LOW },
  ];

  // Legend items matching risk categories
  const legendItems: LegendData[] = [
    { category: ChartCategory.CRITICAL, label: 'Critical' },
    { category: ChartCategory.HIGH, label: 'High' },
    { category: ChartCategory.MEDIUM, label: 'Medium' },
    { category: ChartCategory.LOW, label: 'Low' },
  ];
  

  return (
    <div className="w-full h-full bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6">
      <ChartHeader
        title="Top Riskiest Assets"
        onRemoveWidget={() => console.log("Remove widget")}
        onExportData={() => console.log("Export data")}
        onSettings={() => console.log("Settings")}
        onMagicClick={() => console.log("Magic clicked for Top Riskiest Assets")}
      />
      
      <PieChart
        data={data}
        valueUnit="%"
        valueLabel="Risk Level"
        height={244}
        innerRadius={70}
        outerRadius={100}
        paddingAngle={2}
        showLegend={true}
        legendItems={legendItems}
      />
    </div>
  );
}
