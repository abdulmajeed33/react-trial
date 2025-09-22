import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
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
        onMagicClick={() =>
          console.log("Magic clicked for Security Awareness Score")
        }
      />

      <div className="h-[282px] relative bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 0 }}
          >
            {/* Grid Lines */}
            <CartesianGrid
              strokeDasharray="2 2"
              stroke="#1F242F"
              horizontal={true}
              vertical={true}
            />

            {/* X Axis */}
            <XAxis
              dataKey="name"
              axisLine={false}
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

            {/* Y Axis */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#B6BCC3",
                fontSize: 10,
                fontFamily: "Inter",
              }}
              domain={[0, 100]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              interval={0}
              dx={-10}
            />

            <Tooltip
              cursor={{ stroke: "none" }}
              contentStyle={{
                backgroundColor: '#0E131C',
                border: '1px solid #161B26',
                borderRadius: '8px',
                padding: '8px 12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                color: '#ffffff'
              }}
              itemStyle={{
                fontSize: '12px',
                fontWeight: '600',
                fontFamily: 'Inter'
              }}
              labelStyle={{
                color: '#cccccc',
                fontSize: '11px',
                fontWeight: '500',
                marginBottom: '4px',
                fontFamily: 'Inter'
              }}
              formatter={(value: number) => {
                return [
                  <span style={{ color: '#7988FF' }}>{value}%</span>,
                  'Security Score'
                ];
              }}
            />

            {/* Purple Line */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#7988FF"
              strokeWidth={2}
              dot={false}
              activeDot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
