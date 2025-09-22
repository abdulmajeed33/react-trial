import VerticalBarChart, { type BarChartData } from "./common/VerticalBarChart";

const data: BarChartData[] = [
  {
    name: "CIS Benchmark 5.0",
    value: 90,
    color: "#2FD897",
  },
  {
    name: "AWS Well-Architected",
    value: 53,
    color: "#FF740A",
  },
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
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Compliance")}
    />
  );
}
