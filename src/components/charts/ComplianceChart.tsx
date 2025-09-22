import VerticalBarChart, { type BarChartData, type LegendData } from "./common/VerticalBarChart";

const data: BarChartData[] = [
  {
    name: "CIS Benchmark 5.0",
    value: 90,
    color: "#2FD897",
    category: "optimal",
  },
  {
    name: "AWS Well-Architected",
    value: 53,
    color: "#F59C0B",
    category: "caution",
  },
];

const legendItems: LegendData[] = [
  { color: "#2FD897", label: "High Compliance", category: "optimal" },
  { color: "#F59C0B", label: "Medium Compliance", category: "caution" },
  { color: "#FF5757", label: "Low Compliance", category: "critical" }
];

export default function ComplianceChart() {
  return (
    <VerticalBarChart
      title="Compliance"
      data={data}
      valueUnit="%"
      valueLabel="Compliance Score"
      height={244}
      barCategoryGap="40%"
      showLegend={true}
      legendItems={legendItems}
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Compliance")}
    />
  );
}
