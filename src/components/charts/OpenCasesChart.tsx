import VerticalBarChart, { type BarChartData } from "./common/VerticalBarChart";
import { ChartCategory } from "./common/chartConstants";
import { ChartHeader } from "../ui-components/ChartHeader";

const data: BarChartData[] = [
  {
    name: "Critical",
    value: 15,
    category: ChartCategory.CRITICAL,
  },
  {
    name: "High", 
    value: 65,
    category: ChartCategory.HIGH,
  },
  {
    name: "Medium",
    value: 40,
    category: ChartCategory.MEDIUM,
  },
  {
    name: "Low",
    value: 85,
    category: ChartCategory.LOW,
  },
];

export default function OpenCasesChart() {
  return (
    <div className="w-full h-full bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6">
      <ChartHeader
        title="Open Cases (Severity-wise)"
        onRemoveWidget={() => console.log("Remove widget")}
        onExportData={() => console.log("Export data")}
        onSettings={() => console.log("Settings")}
        onMagicClick={() => console.log("Magic clicked for Open Cases")}
      />
      
      <VerticalBarChart
        data={data}
        valueUnit="count"
        valueLabel="Cases Count"
        height={244}
        barCategoryGap="40%"
        showLegend={true}
      />
    </div>
  );
} 