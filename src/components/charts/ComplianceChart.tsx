import VerticalBarChart, { type BarChartData } from "./common/VerticalBarChart";
import { ChartCategory } from "./common/chartConstants";
import { ChartHeader } from "../ui-components/ChartHeader";

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
    <div className="w-full h-full bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6">
      <ChartHeader
        title="Compliance"
        onRemoveWidget={() => console.log("Remove widget")}
        onExportData={() => console.log("Export data")}
        onSettings={() => console.log("Settings")}
        onMagicClick={() => console.log("Magic clicked for Compliance")}
      />
      
      <VerticalBarChart
        data={data}
        valueUnit="%"
        valueLabel="Compliance Score"
        height={244}
        barCategoryGap="40%"
        showLegend={true}
      />
    </div>
  );
}
