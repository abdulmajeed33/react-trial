import { ChartCategory } from "./common/chartConstants";
import PieChart from "./common/PieChart";

const data = [
  {
    name: "Failed",
    value: 25,
    category: ChartCategory.CRITICAL,
  },
  {
    name: "Reported",
    value: 75,
    category: ChartCategory.OPTIMAL,
  },
];

const legendItems = [
  { category: ChartCategory.CRITICAL, label: "Failed" },
  { category: ChartCategory.OPTIMAL, label: "Reported" },
];

export default function PhishingStatsChart() {
  return (
    <PieChart
      title="Phishing Stats"
      data={data}
      valueUnit="%"
      valueLabel="Phishing Rate"
      height={280}
      innerRadius={0}
      outerRadius={109}
      paddingAngle={1}
      showLegend={true}
      legendItems={legendItems}
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() => console.log("Magic clicked for Phishing Stats")}
    />
  );
}
