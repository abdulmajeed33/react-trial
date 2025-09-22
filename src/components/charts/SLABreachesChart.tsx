import PieChart from './common/PieChart';
import type { PieChartData, LegendData } from './common/PieChart';

export default function SLABreachesChart() {
  
  // Data estimated from Figma visual proportions
  // Based on the concentric circles showing different segments
  const data: PieChartData[] = [
    { name: 'Compliant', value: 60, color: '#2FD897' }, // Largest segment (green)
    { name: 'At Risk', value: 25, color: '#FF740A' }, // Medium segment (orange)
    { name: 'Breached', value: 15, color: '#FF5757' }, // Smallest segment (red)
  ];

  // Legend items matching Figma colors
  const legendItems: LegendData[] = [
    { color: '#2FD897', label: 'Compliant' },
    { color: '#FF740A', label: 'At Risk' },
    { color: '#FF5757', label: 'Breached' },
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