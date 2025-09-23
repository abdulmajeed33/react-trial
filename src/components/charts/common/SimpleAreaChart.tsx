import React from "react";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

export interface SimpleAreaChartData {
  x: number;
  [key: string]: number; // Allow flexible data keys
}

export interface SimpleAreaChartProps {
  data: SimpleAreaChartData[];
  dataKey: string;
  color?: string;
  gradientId?: string;
  gradientOpacity?: {
    start: number;
    end: number;
  };
  strokeWidth?: number;
  areaType?: "linear" | "monotone" | "natural" | "step" | "stepBefore" | "stepAfter";
  showTooltip?: boolean;
  tooltipFormatter?: (value: number) => React.ReactNode;
  tooltipLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SimpleAreaChart: React.FC<SimpleAreaChartProps> = ({
  data,
  dataKey,
  color = "#FF5757",
  gradientId,
  gradientOpacity = { start: 0.15, end: 0 },
  strokeWidth = 2,
  areaType = "natural",
  showTooltip = true,
  tooltipFormatter,
  tooltipLabel,
  className = "absolute inset-0 overflow-hidden rounded-xl",
  style = { zIndex: 1 },
}) => {
  const finalGradientId = gradientId || `${dataKey}AreaGradient`;
  
  const defaultTooltipFormatter = (value: number) => (
    <span style={{ color }} className="text-extra-small font-normal">
      {value}%
    </span>
  );

  const finalTooltipFormatter = tooltipFormatter || defaultTooltipFormatter;
  const finalTooltipLabel = tooltipLabel || dataKey.charAt(0).toUpperCase() + dataKey.slice(1);

  return (
    <div className={className} style={style}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient
              id={finalGradientId}
              x1="0"
              y1="1"
              x2="0"
              y2="0"
            >
              <stop offset="0%" stopColor={color} stopOpacity={gradientOpacity.end} />
              <stop offset="100%" stopColor={color} stopOpacity={gradientOpacity.start} />
            </linearGradient>
          </defs>
          
          {showTooltip && (
            <Tooltip
              cursor={{ stroke: "none" }}
              contentStyle={{
                backgroundColor: '#0E131C',
                border: '1px solid #161B26',
                borderRadius: "8px",
                padding: "8px 12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                color: "#ffffff",
              }}
              itemStyle={{
                color: color,
                fontSize: "12px",
                fontWeight: "600",
              }}
              labelStyle={{
                color: "#cccccc",
                fontSize: "11px",
                fontWeight: "500",
                marginBottom: "2px",
              }}
              formatter={(value: number) => [
                finalTooltipFormatter(value),
                finalTooltipLabel,
              ]}
            />
          )}
          
          <Area
            type={areaType}
            dataKey={dataKey}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={`url(#${finalGradientId})`}
            fillOpacity={1}
            dot={false}
            activeDot={false}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleAreaChart; 