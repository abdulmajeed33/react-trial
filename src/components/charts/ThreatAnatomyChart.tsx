import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
} from "recharts";
import { ChartHeader } from "../ui-components/ChartHeader";

// Common Tooltip Styles for Charts
export const CHART_TOOLTIP_STYLES = {
  contentStyle: {
    backgroundColor: "#0E131C",
    border: "1px solid #161B26",
    borderRadius: "8px",
    padding: "8px 12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
    color: "#ffffff",
  },
  itemStyle: {
    color: "#ffffff",
    fontSize: "12px",
    fontWeight: "500",
    fontFamily: "Inter",
  },
  labelStyle: {
    color: "#cccccc",
    fontSize: "11px",
    fontWeight: "500",
    marginBottom: "4px",
    fontFamily: "Inter",
  },
  cursor: {
    fill: "rgba(255, 255, 255, 0.05)",
  },
  cursorStroke: {
    stroke: "none",
  },
} as const;

type ChartData = {
  stage: number;
  vulnerabilities: number;
  misconfigurations: number;
  vulnLabel?: string;
  misconfigLabel?: string;
};

// Enhanced data with descriptive labels
const data: ChartData[] = [
  {
    stage: 0,
    vulnerabilities: 100,
    misconfigurations: 90,
    vulnLabel: "Total Vulnerabilities",
    misconfigLabel: "Total Misconfiguration",
  },
  {
    stage: 1,
    vulnerabilities: 40,
    misconfigurations: 40,
    vulnLabel: "Critical and High",
    misconfigLabel: "",
  },
  {
    stage: 2,
    vulnerabilities: 20,
    misconfigurations: 20,
    vulnLabel: "Has Public Exploit",
    misconfigLabel: "",
  },
  {
    stage: 3,
    vulnerabilities: 0,
    misconfigurations: 0,
    vulnLabel: "Critical Attack Paths",
    misconfigLabel: "",
  },
];

// Transform data for diverging chart - center baseline
const transformedData = data.map((item) => ({
  ...item,
  // Vulnerabilities go above zero (positive)
  vulnerabilities: item.vulnerabilities,
  // Misconfigurations go below zero (negative)
  misconfigurations: -item.misconfigurations,
}));

// Custom Tooltip Component
type CustomTooltipProps = {
  active?: boolean;
  payload?: Array<{
    color: string;
    dataKey: string;
    value: number;
    payload: any;
  }>;
  label?: number;
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const stageData = payload[0]?.payload;
  const stageNumber = typeof label === "number" ? label + 1 : label;

  return (
    <div style={CHART_TOOLTIP_STYLES.contentStyle}>
      <div style={CHART_TOOLTIP_STYLES.labelStyle}>
        {`Stage ${stageNumber}: ${stageData?.vulnLabel || "Unknown"}`}
      </div>
      <div style={CHART_TOOLTIP_STYLES.itemStyle}>
        <span style={{ color: "#FF5757" }}>●</span>
        {` Vulnerabilities: ${Math.abs(
          stageData?.vulnerabilities || 0
        ).toLocaleString()}`}
      </div>
      <div style={CHART_TOOLTIP_STYLES.itemStyle}>
        <span style={{ color: "#FF740A" }}>●</span>
        {` Misconfigurations: ${Math.abs(
          stageData?.misconfigurations || 0
        ).toLocaleString()}`}
      </div>
    </div>
  );
};

export default function ThreatAnatomyChart(): React.ReactElement {
  // Calculate dynamic labels from actual data
  const getLabel = (value: number) => {
    if (value >= 1000) return `${Math.round(value / 1000)}K`;
    return value?.toString() || "0";
  };

  // Fixed label positioning - centers labels between dividers
  const getStagePosition = (index: number) => {
    const totalStages = data.length;
    const sectionWidth = 100 / totalStages;
    return sectionWidth * index + sectionWidth / 2;
  };

  // Divider positioning remains the same
  const getDividerPosition = (index: number) => {
    const totalStages = data.length;
    return (100 / totalStages) * (index + 1);
  };

  return (
    <div className="bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6 w-full h-[400px]">
      <ChartHeader
        title="Threat Anatomy : The Attack Path Funnel"
        onRemoveWidget={() => {}}
        onExportData={() => {}}
        onSettings={() => {}}
        onMagicClick={() => {}}
      />

      <div className="flex-1 bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl relative min-h-[300px] p-6">
        {/* Dynamic vulnerability labels - centered in each section */}
        {data.map((item, index) => (
          <div
            key={`vuln-label-${index}`}
            className="absolute top-6 z-10"
            style={{
              left: `${getStagePosition(index)}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="text-white text-lg font-bold font-mono text-center">
              {getLabel(item.vulnerabilities)}
            </div>
            <div className="text-gray-400 text-xs whitespace-nowrap text-center">
              {item.vulnLabel}
            </div>
          </div>
        ))}

        {/* Dynamic misconfiguration labels - only show for first and last items */}
        {data.map((item, index) =>
          index === 0 || (index === data.length - 1 && item.misconfigLabel) ? (
            <div
              key={`misconfig-label-${index}`}
              className="absolute bottom-6 z-10"
              style={{
                left: `${getStagePosition(index)}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="text-white text-lg font-bold font-mono text-center">
                {getLabel(item.misconfigurations)}
              </div>
              <div className="text-gray-400 text-xs whitespace-nowrap text-center">
                {item.misconfigLabel}
              </div>
            </div>
          ) : null
        )}

        {/* Dynamic vertical divider lines */}
        {data.slice(0, -1).map((_, index) => (
          <div
            key={`divider-${index}`}
            className="absolute top-0 bottom-0 w-px opacity-50"
            style={{
              left: `${getDividerPosition(index)}%`,
              backgroundImage:
                "repeating-linear-gradient(to bottom, #374151 0px, #374151 4px, transparent 4px, transparent 8px)",
            }}
          ></div>
        ))}

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={transformedData}
            margin={{ top: 60, right: 0, left: 0, bottom: 60 }}
            stackOffset="none"
          >
            {/* Center baseline (zero line) */}
            <ReferenceLine
              y={0}
              stroke="#FF740A"
              strokeWidth={2}
              strokeDasharray="none"
            />

            <XAxis
              type="number"
              dataKey="stage"
              domain={[0, data.length - 1]}
              hide={true}
            />
            <YAxis hide={true} />

            {/* Custom Tooltip with provided styling */}
            <Tooltip
              content={<CustomTooltip />}
              cursor={CHART_TOOLTIP_STYLES.cursorStroke}
            />

            {/* Vulnerabilities area - above center line (positive values) */}
            <Area
              type="monotone"
              dataKey="vulnerabilities"
              stroke="#FF5757"
              strokeWidth={1}
              fill={`${"#FF5757"}3F`}
              fillOpacity={1}
              baseValue={0}
              dot={false}
              activeDot={false}
            />

            {/* Misconfigurations area - below center line (negative values) */}
            <Area
              type="monotone"
              dataKey="misconfigurations"
              stroke="#FF740A"
              strokeWidth={1}
              fill={`${"#FF740A"}3F`}
              fillOpacity={1}
              baseValue={0}
              dot={false}
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
