import VerticalBarChart, { type BarChartData } from "./common/VerticalBarChart";
import { ChartCategory } from "./common/chartConstants";

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
    <VerticalBarChart
      title="Open Cases (Severity-wise)"
      data={data}
      valueUnit="count"
      valueLabel="Cases Count"
      height={244}
      barCategoryGap="40%"
      showLegend={true}
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Open Cases")}
    />
  );
} 