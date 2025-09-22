import VerticalBarChart, { type BarChartData } from "./common/VerticalBarChart";

const data: BarChartData[] = [
  {
    name: "Q1",
    value: 20,
    color: "#FF5757", // Critical - Red
  },
  {
    name: "Q2",
    value: 85,
    color: "#2FD897", // Optimal - Green
  },
  {
    name: "Q3",
    value: 95,
    color: "#2FD897", // Optimal - Green
  },
  {
    name: "Q4",
    value: 52,
    color: "#F59C0B", // Caution - Orange
  },
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
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Security Awareness Score")}
    />
  );
}
