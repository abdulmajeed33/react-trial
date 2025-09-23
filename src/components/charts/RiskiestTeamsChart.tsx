import VerticalBarChart from './common/VerticalBarChart';
import type { BarChartData, LegendData } from './common/VerticalBarChart';
import { ChartCategory } from './common/chartConstants';
import { ChartHeader } from '../ui-components/ChartHeader';

export default function RiskiestTeamsChart() {
  
  // Data based on Figma design - bar heights relative to 100% scale
  const data: BarChartData[] = [
    { name: "Engineering", value: 21, category: ChartCategory.CRITICAL }, // ~39px height from 188px total
    { name: "IT Operators", value: 83, category: ChartCategory.OPTIMAL }, // ~156px height from 188px total  
    { name: "Finance", value: 94, category: ChartCategory.OPTIMAL }, // ~176px height from 188px total
    { name: "HR", value: 52, category: ChartCategory.CAUTION }, // ~98px height from 188px total
  ];

  // Legend items matching categories
  const legendItems: LegendData[] = [
    { category: ChartCategory.OPTIMAL, label: "Optimal" },
    { category: ChartCategory.CAUTION, label: "Caution" }, 
    { category: ChartCategory.CRITICAL, label: "Critical" }
  ];

  return (
    <div className="w-full h-full bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6">
      <ChartHeader
        title="Riskiest Teams"
        onRemoveWidget={() => console.log("Remove widget")}
        onExportData={() => console.log("Export data")}
        onSettings={() => console.log("Settings")}
        onMagicClick={() => console.log("Magic clicked for Riskiest Teams")}
      />
      
      <VerticalBarChart
        data={data}
        valueUnit="%"
        valueLabel="Risk Score"
        height={244}
        barCategoryGap="40%"
        showLegend={true}
        legendItems={legendItems}
      />
    </div>
  );
} 