import PieChart from './common/PieChart';
import type { PieChartData, LegendData } from './common/PieChart';
import { ChartCategory } from './common/chartConstants';
import { ChartHeader } from '../ui-components/ChartHeader';

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
    <div className="w-full h-full bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6">
      <ChartHeader
        title="Asset Compliance Patching"
        onRemoveWidget={() => console.log("Remove widget")}
        onExportData={() => console.log("Export data")}
        onSettings={() => console.log("Settings")}
        onMagicClick={() => console.log("Magic clicked for Asset Compliance Patching")}
      />
      
      <PieChart
        data={data}
        valueUnit="%"
        valueLabel="Compliance Status"
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