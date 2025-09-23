import VerticalBarChart, { type BarChartData } from "./common/VerticalBarChart";

const data: BarChartData[] = [
  {
    name: "Critical",
    value: 65
  },
  {
    name: "High", 
    value: 16,
  },
  {
    name: "Medium",
    value: 8,

  },
  {
    name: "Low",
    value: 55,
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
      defaultBarColor="#7988FF"
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Assets with Most Alerts")}
    />
  );
}
