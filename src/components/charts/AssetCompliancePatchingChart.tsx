import PieChart from './common/PieChart';
import type { PieChartData, LegendData } from './common/PieChart';
import { ChartCategory } from './common/chartConstants';

export default function AssetCompliancePatchingChart() {
  
  // Data based on Figma visual proportions
  // The design shows a larger green (compliant) segment and smaller red (non-compliant) segment
  const data: PieChartData[] = [
    { name: 'Compliant', value: 75, category: ChartCategory.OPTIMAL }, // Green - larger segment
    { name: 'Non-Compliant', value: 25, category: ChartCategory.CRITICAL }, // Red - smaller segment
  ];

  // Legend items matching Figma colors and labels
  const legendItems: LegendData[] = [
    { category: ChartCategory.OPTIMAL, label: 'Compliant' },
    { category: ChartCategory.CRITICAL, label: 'Non-Compliant' },
  ];

  return (
    <PieChart
      title="Asset Compliance Patching"
      data={data}
      valueUnit="%"
      valueLabel="Compliance Status"
      height={244}
      innerRadius={70}
      outerRadius={100}
      paddingAngle={2}
      showLegend={true}
      legendItems={legendItems}
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Asset Compliance Patching")}
    />
  );
} 