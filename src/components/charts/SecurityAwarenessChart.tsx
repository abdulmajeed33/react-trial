import React from "react";
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
import { LegendItem } from "../ui-components/LegendItem";

const data = [
  {
    name: "Q1",
    value: 20,
    color: "#FF5757", // Critical - Red
  },
  {
    name: "Q2",
    value: 85,
    color: "#2FD897", // Optimal - Green
  },
  {
    name: "Q3",
    value: 95,
    color: "#2FD897", // Optimal - Green
  },
  {
    name: "Q4",
    value: 52,
    color: "#F59C0B", // Caution - Orange
  },
];

export default function SecurityAwarenessChart() {
  return (
    <div className="w-full h-full bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6">
      <ChartHeader title="Security Awareness Score" />
      
      <div className="h-[244px] relative bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 0}}
            barCategoryGap="28%"
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

      {/* Custom Legend */}
      <div className="flex items-center gap-4">
        <LegendItem color="#2FD897" label="Optimal" />
        <LegendItem color="#F59C0B" label="Caution" />
        <LegendItem color="#FF5757" label="Critical" />
      </div>
    </div>
  );
}
