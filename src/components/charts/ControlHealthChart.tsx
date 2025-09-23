import PieChart from './common/PieChart';
import type { PieChartData, LegendData } from './common/PieChart';
import { ChartCategory } from './common/chartConstants';

export default function ControlHealthChart() {
  
  // Data estimated from Figma visual proportions
  // Based on the concentric circles showing different segments
  const data: PieChartData[] = [
    { name: 'Healthy', value: 55, category: ChartCategory.OPTIMAL }, // Largest segment (green)
    { name: 'Degraded', value: 30, category: ChartCategory.CAUTION }, // Medium segment (orange)
    { name: 'Offline', value: 15, category: ChartCategory.CRITICAL }, // Smallest segment (red)
  ];

  // Legend items matching Figma colors
  const legendItems: LegendData[] = [
    { category: ChartCategory.OPTIMAL, label: 'Healthy' },
    { category: ChartCategory.CAUTION, label: 'Degraded' },
    { category: ChartCategory.CRITICAL, label: 'Offline' },
  ];

  return (
    <PieChart
      title="Control Health"
      data={data}
      valueUnit="%"
      valueLabel="Health Status"
      height={244}
      innerRadius={70}
      outerRadius={100}
      paddingAngle={2}
      showLegend={true}
      legendItems={legendItems}
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Control Health")}
    />
  );
} 