import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ChartHeader } from "../ui-components/ChartHeader";
import { LegendItem } from "../ui-components/LegendItem";

const data = [
  {
    name: "Failed", 
    value: 25,
    fill: "rgba(255, 87, 87, 0.12)", // Red with transparency
    stroke: "#FF5757", // Red stroke
  },
  {
    name: "Reported",
    value: 75,
    fill: "rgba(47, 216, 151, 0.12)", // Green with transparency
    stroke: "#2FD897", // Green stroke
  },
];

export default function PhishingStatsChart() {
  return (
    <div className="w-full h-full bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6">
      <ChartHeader
        title="Phishing Stats"
        onRemoveWidget={() => console.log("Remove widget")}
        onExportData={() => console.log("Export data")}
        onSettings={() => console.log("Settings")}
        onMagicClick={() => console.log("Magic clicked for Phishing Stats")}
      />
      
      <div className="h-[250px] relative bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={109}
              paddingAngle={1}
              dataKey="value"
              strokeWidth={1}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                  stroke={entry.stroke}
                  strokeWidth={1}
                />
              ))}
            </Pie>
            <Tooltip
              cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
              contentStyle={{
                backgroundColor: '#0E131C',
                border: '1px solid #161B26',
                borderRadius: '8px',
                padding: '8px 12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                color: '#ffffff'
              }}
              itemStyle={{
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: '500',
                fontFamily: 'Inter'
              }}
              labelStyle={{
                color: '#cccccc',
                fontSize: '11px',
                fontWeight: '500',
                marginBottom: '4px',
                fontFamily: 'Inter'
              }}
              formatter={(value: number, name: string) => {
                return [
                  <span style={{ color: name === 'Failed' ? '#FF5757' : '#2FD897' }}>
                    {value}%
                  </span>,
                  'Phishing Rate'
                ];
              }}
              labelFormatter={(label: string) => label}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend */}
      <div className="flex items-center gap-4">
        <LegendItem color="#FF5757" label="Failed" />
        <LegendItem color="#2FD897" label="Reported" />
      </div>
    </div>
  );
}
