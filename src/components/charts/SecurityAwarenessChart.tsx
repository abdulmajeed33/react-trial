import VerticalBarChart, { type BarChartData, type LegendData } from "./common/VerticalBarChart";

const data: BarChartData[] = [
  {
    name: "Q1",
    value: 20,
    color: "#FF5757", // Critical - Red
    category: "critical",
  },
  {
    name: "Q2",
    value: 85,
    color: "#2FD897", // Optimal - Green
    category: "optimal",
  },
  {
    name: "Q3",
    value: 95,
    color: "#2FD897", // Optimal - Green
    category: "optimal",
  },
  {
    name: "Q4",
    value: 52,
    color: "#F59C0B", // Caution - Orange
    category: "caution",
  },
];

const legendItems: LegendData[] = [
  { color: "#2FD897", label: "Optimal", category: "optimal" },
  { color: "#F59C0B", label: "Caution", category: "caution" },
  { color: "#FF5757", label: "Critical", category: "critical" }
];

export default function SecurityAwarenessChart() {
  return (
    <VerticalBarChart
      title="Security Awareness Score"
      data={data}
      valueUnit="%"
      valueLabel="Security Score"
      height={244}
      barCategoryGap="28%"
      showLegend={true}
      legendItems={legendItems}
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Security Awareness Score")}
    />
  );
}
