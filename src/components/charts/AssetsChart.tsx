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

const data = [
  {
    name: "Critical",
    value: 65,
    color: "#7988FF",
  },
  {
    name: "High", 
    value: 16,
    color: "#7988FF",
  },
  {
    name: "Medium",
    value: 8,
    color: "#7988FF",
  },
  {
    name: "Low",
    value: 55,
    color: "#7988FF",
  },
];

export default function AssetsChart() {
  return (
    <div className="w-full h-full bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6">
      <ChartHeader
        title="Assets with Most Alerts"
        onRemoveWidget={() => console.log("Remove widget")}
        onExportData={() => console.log("Export data")}
        onSettings={() => console.log("Settings")}
        onMagicClick={() => console.log("Magic clicked for Assets with Most Alerts")}
      />
      
      <div className="h-[288px] relative bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
            barCategoryGap="30%"
          >
            <CartesianGrid
              strokeDasharray="2 2"
              stroke="#1F242F"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={{ stroke: "#1F242F", strokeWidth: 1 }}
              tickLine={false}
              tick={{
                fill: "#B6BCC3",
                fontSize: 10,
                fontFamily: "Inter",
              }}
              interval={0}
              angle={0}
              textAnchor="middle"
              height={50}
              dy={15}
            />
            <YAxis
              axisLine={{ stroke: "#1F242F", strokeWidth: 1 }}
              tickLine={false}
              tick={{
                fill: "#B6BCC3",
                fontSize: 10,
                fontFamily: "Inter",
              }}
              domain={[0, 100]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              interval={0}
              width={40}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`${entry.color}1F`}
                  stroke={entry.color}
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
