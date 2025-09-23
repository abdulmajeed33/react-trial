import PieChart from './common/PieChart';
import type { PieChartData, LegendData } from './common/PieChart';
import { ChartCategory } from './common/chartConstants';

export default function SLABreachesChart() {
  
  // Data estimated from Figma visual proportions
  // Based on the concentric circles showing different segments
  const data: PieChartData[] = [
    { name: 'Compliant', value: 60, category: ChartCategory.OPTIMAL }, // Largest segment (green)
    { name: 'At Risk', value: 25, category: ChartCategory.CAUTION }, // Medium segment (orange)
    { name: 'Breached', value: 15, category: ChartCategory.CRITICAL }, // Smallest segment (red)
  ];

  // Legend items matching categories
  const legendItems: LegendData[] = [
    { category: ChartCategory.OPTIMAL, label: 'Compliant' },
    { category: ChartCategory.CAUTION, label: 'At Risk' },
    { category: ChartCategory.CRITICAL, label: 'Breached' },
  ];

  return (
    <PieChart
      title="SLA Breaches"
      data={data}
      valueUnit="%"
      valueLabel="SLA Status"
      height={244}
      innerRadius={70}
      outerRadius={100}
      paddingAngle={2}
      showLegend={true}
      legendItems={legendItems}
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for SLA Breaches")}
    />
  );
} 