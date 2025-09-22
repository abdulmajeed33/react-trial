import VerticalBarChart, { type BarChartData, type LegendData } from "./common/VerticalBarChart";

const data: BarChartData[] = [
  {
    name: "Engineering",
    value: 20,
    color: "#FF5757", // Critical - Red
    category: "critical",
  },
  {
    name: "IT Operators",
    value: 85,
    color: "#2FD897", // Optimal - Green
    category: "optimal",
  },
  {
    name: "Finance",
    value: 95,
    color: "#2FD897", // Optimal - Green
    category: "optimal",
  },
  {
    name: "HR",
    value: 52,
    color: "#F59C0B", // Caution - Orange
    category: "caution",
  },
];

const legendItems: LegendData[] = [
  { color: "#2FD897", label: "High Compliance", category: "optimal" },
  { color: "#F59C0B", label: "Medium Compliance", category: "caution" },
  { color: "#FF5757", label: "Low Compliance", category: "critical" }
];

export default function PatchingComplianceChart() {
  return (
    <VerticalBarChart
      title="Patching Compliance by Team"
      data={data}
      valueUnit="%"
      valueLabel="Compliance Score"
      height={244}
      barCategoryGap="28%"
      showLegend={true}
      legendItems={legendItems}
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Patching Compliance by Team")}
    />
  );
}
