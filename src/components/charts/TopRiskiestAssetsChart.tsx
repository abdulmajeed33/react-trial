import PieChart from './common/PieChart';
import type { PieChartData, LegendData } from './common/PieChart';
import { ChartCategory } from './common/chartConstants';

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
    <PieChart
      title="Top Riskiest Assets"
      data={data}
      valueUnit="%"
      valueLabel="Risk Level"
      height={244}
      innerRadius={70}
      outerRadius={100}
      paddingAngle={2}
      showLegend={true}
      legendItems={legendItems}
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Top Riskiest Assets")}
    />
  );
}
