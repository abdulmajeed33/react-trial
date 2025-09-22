import VerticalBarChart from './common/VerticalBarChart';
import type { BarChartData, LegendData } from './common/VerticalBarChart';

export default function RiskiestTeamsChart() {
  
  // Data based on Figma design - bar heights relative to 100% scale
  const data: BarChartData[] = [
    { name: "Engineering", value: 21, color: "#FF5757", category: "critical" }, // ~39px height from 188px total
    { name: "IT Operators", value: 83, color: "#2FD897", category: "optimal" }, // ~156px height from 188px total  
    { name: "Finance", value: 94, color: "#2FD897", category: "optimal" }, // ~176px height from 188px total
    { name: "HR", value: 52, color: "#F59C0B", category: "caution" }, // ~98px height from 188px total
  ];

  // Legend items matching Figma colors
  const legendItems: LegendData[] = [
    { color: "#2FD897", label: "Optimal", category: "optimal" },
    { color: "#F59C0B", label: "Caution", category: "caution" }, 
    { color: "#FF5757", label: "Critical", category: "critical" }
  ];

  return (
    <VerticalBarChart
      title="Riskiest Teams"
      data={data}
      valueUnit="%"
      valueLabel="Risk Score"
      height={244}
      barCategoryGap="40%"
      showLegend={true}
      legendItems={legendItems}
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Riskiest Teams")}
    />
  );
} 