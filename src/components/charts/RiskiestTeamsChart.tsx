import VerticalBarChart from './common/VerticalBarChart';
import type { BarChartData, LegendData } from './common/VerticalBarChart';

export interface RiskiestTeamsChartProps {
  onRemoveWidget?: () => void;
  onExportData?: () => void;
  onSettings?: () => void;
  onMagicClick?: () => void;
}

export default function RiskiestTeamsChart({
  onRemoveWidget,
  onExportData,
  onSettings,
  onMagicClick,
}: RiskiestTeamsChartProps) {
  
  // Data based on Figma design - bar heights relative to 100% scale
  const data: BarChartData[] = [
    { name: "Engineering", value: 21, color: "#FF5757" }, // ~39px height from 188px total
    { name: "IT Operators", value: 83, color: "#2FD897" }, // ~156px height from 188px total  
    { name: "Finance", value: 94, color: "#2FD897" }, // ~176px height from 188px total
    { name: "HR", value: 52, color: "#F59C0B" }, // ~98px height from 188px total
  ];

  // Legend items matching Figma colors
  const legendItems: LegendData[] = [
    { color: "#2FD897", label: "Optimal" },
    { color: "#FF740A", label: "Caution" }, 
    { color: "#FF5757", label: "Critical" }
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
      onRemoveWidget={onRemoveWidget}
      onExportData={onExportData}
      onSettings={onSettings}
      onMagicClick={onMagicClick}
    />
  );
} 