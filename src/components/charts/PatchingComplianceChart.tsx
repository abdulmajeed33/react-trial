import VerticalBarChart, { type BarChartData } from "./common/VerticalBarChart";
import { ChartCategory } from "./common/chartConstants";

const data: BarChartData[] = [
  {
    name: "Engineering",
    value: 20,
    category: ChartCategory.CRITICAL, // Critical - Red
  },
  {
    name: "IT Operators",
    value: 85,
    category: ChartCategory.OPTIMAL, // Optimal - Green
  },
  {
    name: "Finance",
    value: 95,
    category: ChartCategory.OPTIMAL, // Optimal - Green
  },
  {
    name: "HR",
    value: 52,
    category: ChartCategory.CAUTION, // Caution - Orange
  },
];

export default function PatchingComplianceChart() {
  return (
    <VerticalBarChart
      title="Patching Compliance by Team"
      data={data}
      valueUnit="%"
      valueLabel="Compliance Score"
      height={244}
      barCategoryGap="28%"
      showLegend={true}
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Patching Compliance by Team")}
    />
  );
}
