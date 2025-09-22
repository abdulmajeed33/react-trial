import VerticalBarChart, { type BarChartData } from "./common/VerticalBarChart";
import { ChartCategory } from "./common/chartConstants";

const data: BarChartData[] = [
  {
    name: "CIS Benchmark 5.0",
    value: 90,
    category: ChartCategory.OPTIMAL,
  },
  {
    name: "AWS Well-Architected",
    value: 53,
    category: ChartCategory.CAUTION,
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
