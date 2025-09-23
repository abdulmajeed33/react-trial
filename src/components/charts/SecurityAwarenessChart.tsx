import VerticalBarChart, { type BarChartData } from "./common/VerticalBarChart";
import { ChartCategory } from "./common/chartConstants";
import { ChartHeader } from "../ui-components/ChartHeader";

const data: BarChartData[] = [
  {
    name: "Q1",
    value: 20,
    category: ChartCategory.CRITICAL, // Critical - Red
  },
  {
    name: "Q2",
    value: 85,
    category: ChartCategory.OPTIMAL, // Optimal - Green
  },
  {
    name: "Q3",
    value: 95,
    category: ChartCategory.OPTIMAL, // Optimal - Green
  },
  {
    name: "Q4",
    value: 52,
    category: ChartCategory.CAUTION, // Caution - Orange
  },
];

export default function SecurityAwarenessChart() {
  return (
    <div className="w-full h-full bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6">
      <ChartHeader
        title="Security Awareness Score"
        onRemoveWidget={() => console.log("Remove widget")}
        onExportData={() => console.log("Export data")}
        onSettings={() => console.log("Settings")}
        onMagicClick={() => console.log("Magic clicked for Security Awareness Score")}
      />
      
      <VerticalBarChart
        data={data}
        valueUnit="%"
        valueLabel="Security Score"
        height={244}
        barCategoryGap="28%"
        showLegend={true}
      />
    </div>
  );
}
