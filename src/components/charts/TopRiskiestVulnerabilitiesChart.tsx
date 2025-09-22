import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ChartHeader } from "../ui-components/ChartHeader";

// Data based on the Figma design and image description
const data = [
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
    <div className="bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6 w-full h-full">
      <ChartHeader
        title="Top Riskiest Vulnerabilities"
        onRemoveWidget={() => console.log("Remove widget")}
        onExportData={() => console.log("Export data")}
        onSettings={() => console.log("Settings")}
        onMagicClick={() =>
          console.log("Magic clicked for Top Riskiest Vulnerabilities")
        }
      />

      <div className="flex-1 bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl relative min-h-[282px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 20, left: -60, bottom: 0 }}
            barCategoryGap="10%"
          >
            <CartesianGrid
              strokeDasharray="2 2"
              stroke="#1F242F"
              horizontal={false} // Grid lines sfhould match vertical layout
              vertical={true}
            />
            <XAxis
              type="number"
              domain={[0, 100]}
              axisLine={{ stroke: "#1F242F", strokeWidth: 1 }}
              tickLine={false}
              tick={{
                fill: "#B6BCC3",
                fontSize: 10,
                fontFamily: "Inter",
              }}
              ticks={[0, 20, 40, 60, 80, 100]}
              interval={0}
              angle={0}
              textAnchor="middle"
              height={50}
              dy={15}
            />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#F1F3FF",
                fontSize: 10,
                fontFamily: "Inter",
                fontWeight: 400,
              }}
              width={190}
              interval={0}
            />
            <Bar
              dataKey="value"
              radius={[0, 8, 8, 0]}
              fill="rgba(255, 87, 87, 0.12)"
              stroke="#FF5757"
              strokeWidth={1}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill="rgba(255, 87, 87, 0.12)"
                  stroke="#FF5757"
                  strokeWidth={1}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
