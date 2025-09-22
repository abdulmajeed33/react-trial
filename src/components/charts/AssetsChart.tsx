import { ChartCategory } from "./common/chartConstants";
import VerticalBarChart, { type BarChartData } from "./common/VerticalBarChart";

const data: BarChartData[] = [
  {
    name: "Critical",
    value: 65,
    category: ChartCategory.ASSETS,
  },
  {
    name: "High", 
    value: 16,
    category: ChartCategory.ASSETS,
  },
  {
    name: "Medium",
    value: 8,
    category: ChartCategory.ASSETS,
  },
  {
    name: "Low",
    value: 55,
    category: ChartCategory.ASSETS,
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
