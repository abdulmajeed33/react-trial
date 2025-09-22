import VerticalBarChart, { type BarChartData } from "./common/VerticalBarChart";

const data: BarChartData[] = [
  {
    name: "Engineering",
    value: 20,
    color: "#FF5757", // Critical - Red
  },
  {
    name: "IT Operators",
    value: 85,
    color: "#2FD897", // Optimal - Green
  },
  {
    name: "Finance",
    value: 95,
    color: "#2FD897", // Optimal - Green
  },
  {
    name: "HR",
    value: 52,
    color: "#F59C0B", // Caution - Orange
  },
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
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Patching Compliance by Team")}
    />
  );
}
