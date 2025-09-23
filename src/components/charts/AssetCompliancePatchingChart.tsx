import PieChart from './common/PieChart';
import type { PieChartData, LegendData } from './common/PieChart';

export default function AssetCompliancePatchingChart() {
  
  // Data based on Figma visual proportions
  // The design shows a larger green (compliant) segment and smaller red (non-compliant) segment
  const data: PieChartData[] = [
    { name: 'Compliant', value: 75, color: '#2FD897' }, // Green - larger segment
    { name: 'Non-Compliant', value: 25, color: '#FF5757' }, // Red - smaller segment
  ];

  // Legend items matching Figma colors and labels
  const legendItems: LegendData[] = [
    { color: '#2FD897', label: 'Compliant' },
    { color: '#FF5757', label: 'Non-Compliant' },
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