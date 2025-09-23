import VerticalBarChart, { type BarChartData } from "./common/VerticalBarChart";
import { ChartHeader } from "../ui-components/ChartHeader";

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
    <div className="w-full h-full bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6">
      <ChartHeader
        title="Assets with Most Alerts"
        onRemoveWidget={() => console.log("Remove widget")}
        onExportData={() => console.log("Export data")}
        onSettings={() => console.log("Settings")}
        onMagicClick={() => console.log("Magic clicked for Assets with Most Alerts")}
      />
      
      <VerticalBarChart
        data={data}
        valueUnit="count"
        valueLabel="Assets Count"
        height={288}
        barCategoryGap="30%"
        showLegend={false}
        defaultBarColor="#7988FF"
      />
    </div>
  );
}
