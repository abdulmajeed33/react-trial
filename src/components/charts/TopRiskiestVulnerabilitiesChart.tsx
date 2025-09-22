import HorizontalBarChart, { type HorizontalBarChartData } from "./common/HorizontalBarChart";

// Data based on the Figma design and image description
const data: HorizontalBarChartData[] = [
  { name: "Weak or default passwords", value: 48 },
  { name: "Lack of timely security patches", value: 100 },
  { name: "Excessive privileges granted to users", value: 58 },
  { name: "Access control misconfigurations", value: 52 },
  { name: "Incorrect function settings", value: 58 },
];

// will be used this with dynamic data
// const BAR_HEIGHT = 40;
// const chartHeight = Math.max(data.length * BAR_HEIGHT, 200);

export default function TopRiskiestVulnerabilitiesChart() {
  return (
    <HorizontalBarChart
      title="Top Riskiest Vulnerabilities"
      data={data}
      valueUnit="%"
      valueLabel="Risk Level"
      height={282}
      barCategoryGap="10%"
      showLegend={false}
      defaultBarColor="#FF5757"
      barRadius={[0, 8, 8, 0]}
      yAxisWidth={190}
      xAxisTicks={[0, 20, 40, 60, 80, 100]}
      domain={[0, 100]}
      margin={{ top: 20, right: 20, left: -60, bottom: 0 }}
      onRemoveWidget={() => console.log("Remove widget")}
      onExportData={() => console.log("Export data")}
      onSettings={() => console.log("Settings")}
      onMagicClick={() =>
        console.log("Magic clicked for Top Riskiest Vulnerabilities")
      }
    />
  );
}
