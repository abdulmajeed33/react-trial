import VerticalBarChart, { type BarChartData } from "./common/VerticalBarChart";
import { ChartCategory } from "./common/chartConstants";

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
