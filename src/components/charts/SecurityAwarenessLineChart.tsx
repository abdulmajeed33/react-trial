import LineChart from "./common/LineChart";
import { ChartHeader } from "../ui-components/ChartHeader";

// Data that matches the curve pattern from the image
const data = [
  { name: "Q1", value: 0 },
  { name: "Q2", value: 30 },
  { name: "Q3", value: 100 },
  { name: "Q4", value: 78 },
];

export default function SecurityAwarenessLineChart() {
  return (
    <div className="w-full h-full bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6">
      <ChartHeader
        title="Security Awareness Score"
        onRemoveWidget={() => console.log("Remove widget")}
        onExportData={() => console.log("Export data")}
        onSettings={() => console.log("Settings")}
        onMagicClick={() => console.log("Magic clicked for Security Awareness Score")}
      />
      
      <LineChart
        data={data}
        valueUnit="%"
        valueLabel="Security Score"
        height={282}
        showLegend={false}
        defaultLineColor="#7988FF"
        lineType="monotone"
        strokeWidth={2}
        showDots={false}
        showActiveDot={false}
        margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
        yAxisTicks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
        domain={[0, 100]}
        gridLines={{ horizontal: true, vertical: true }}
      />
    </div>
  );
}
