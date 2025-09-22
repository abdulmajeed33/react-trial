import VerticalBarChart, { type BarChartData } from "./common/VerticalBarChart";

const data: BarChartData[] = [
  {
    name: "Critical",
    value: 65,
    color: "#7988FF",
  },
  {
    name: "High", 
    value: 16,
    color: "#7988FF",
  },
  {
    name: "Medium",
    value: 8,
    color: "#7988FF",
  },
  {
    name: "Low",
    value: 55,
    color: "#7988FF",
  },
];

export default function AssetsChart() {
  return (
    <VerticalBarChart
      title="Assets with Most Alerts"
      data={data}
      valueUnit="count"
      valueLabel="Assets Count"
      height={288}
      barCategoryGap="30%"
      showLegend={false}
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Assets with Most Alerts")}
    />
  );
}
