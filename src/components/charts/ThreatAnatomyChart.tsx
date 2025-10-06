import React, { useState, useMemo, useRef, useCallback } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { ChartHeader } from "../ui-components/ChartHeader";

// --- Types matching the reference implementation ---
interface ApiThreatFunnelItem {
  stage: string;
  vulnerabilities: number;
  misconfigurations: number;
}

interface ApiResponse {
  data: {
    threatFunnel: ApiThreatFunnelItem[];
  };
}

interface ChartDataPoint {
  name: string;
  vulnValue: number;
  misconfigValue: number;
  actualVulnValue: number; // Actual value without spacing for display
  actualMisconfigValue: number; // Actual value without spacing for display
  vulnLabel: string;
  misconfigLabel: string;
  vulnPercent: number | null;
  misconfigPercent: number | null;
  isMisconfigExploitNA: boolean;
}

interface GraphProps {
  data?: ApiResponse;
  loading?: boolean;
}

interface HoveredInfo {
  index: number;
  series: "vuln" | "misconfig";
}

// --- Helper function to format large numbers ---
const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  }
  return num.toString();
};

// --- Helper function to interpolate between two values ---
const lerp = (start: number, end: number, t: number): number => {
  return start + (end - start) * t;
};

// --- Data transformation function with interpolation for smooth curves ---
const transformApiDataToChartData = (
  apiData?: ApiResponse
): ChartDataPoint[] => {
  if (!apiData?.data?.threatFunnel) {
    return []; // Return empty array when no API data
  }

  const threatFunnel = apiData.data.threatFunnel;
  const totalVuln = threatFunnel[0]?.vulnerabilities || 1;
  const totalMisconfig = threatFunnel[0]?.misconfigurations || 1;
  const spacing = 800; // Spacing from center line to prevent graphs from merging with the dashed line

  // First, create the base data points
  const basePoints = threatFunnel.map((item, index) => {
    const vulnPercent =
      index > 0 ? (item.vulnerabilities / totalVuln) * 100 : null;
    const misconfigPercent =
      index > 0 ? (item.misconfigurations / totalMisconfig) * 100 : null;

    // Handle special cases
    const isMisconfigExploitNA =
      item.stage.toLowerCase().includes("exploit") &&
      item.misconfigurations === 0;

    return {
      name:
        item.stage === "Critical & High / High Impact"
          ? "Critical and High"
          : item.stage === "Public Exploit / Easily Exploitable"
          ? "Has Public Exploit"
          : item.stage,
      vulnValue: item.vulnerabilities + spacing,
      misconfigValue: -(item.misconfigurations + spacing),
      actualVulnValue: item.vulnerabilities,
      actualMisconfigValue: item.misconfigurations,
      vulnLabel: item.stage === "Total" ? "Total Vulnerabilities" : item.stage,
      misconfigLabel:
        item.stage === "Total" ? "Total Misconfiguration" : item.stage,
      vulnPercent,
      misconfigPercent,
      isMisconfigExploitNA,
    };
  });

  // Add interpolated points between each base point for smoother curves
  const smoothedPoints: ChartDataPoint[] = [];
  const interpolationSteps = 3; // Number of points to add between each pair (higher = smoother)

  for (let i = 0; i < basePoints.length; i++) {
    smoothedPoints.push(basePoints[i]);

    // Add interpolated points between current and next point (except for last point)
    if (i < basePoints.length - 1) {
      const current = basePoints[i];
      const next = basePoints[i + 1];

      for (let step = 1; step <= interpolationSteps; step++) {
        const t = step / (interpolationSteps + 1);
        smoothedPoints.push({
          name: `${current.name}-interp-${step}`, // Interpolated point identifier
          vulnValue: lerp(current.vulnValue, next.vulnValue, t),
          misconfigValue: lerp(current.misconfigValue, next.misconfigValue, t),
          actualVulnValue: lerp(
            current.actualVulnValue,
            next.actualVulnValue,
            t
          ),
          actualMisconfigValue: lerp(
            current.actualMisconfigValue,
            next.actualMisconfigValue,
            t
          ),
          vulnLabel: current.vulnLabel,
          misconfigLabel: current.misconfigLabel,
          vulnPercent: current.vulnPercent,
          misconfigPercent: current.misconfigPercent,
          isMisconfigExploitNA: current.isMisconfigExploitNA,
        });
      }
    }
  }

  return smoothedPoints;
};

// --- External Tooltip Component (matching the reference design) ---
interface CustomExternalTooltipProps {
  info: HoveredInfo | null;
  hideTimeoutRef: React.MutableRefObject<NodeJS.Timeout | null>;
  chartData: ChartDataPoint[];
}

const CustomExternalTooltip: React.FC<CustomExternalTooltipProps> = ({
  info,
  hideTimeoutRef,
  chartData,
}) => {
  if (!info) return null;

  const { index, series } = info;
  const dataPoint = chartData[index];

  // Calculate position based on stage - align with chart sections
  const leftPosition = `${((index + 0.5) / chartData.length) * 100}%`;
  const topPosition = series === "vuln" ? "20%" : "75%";

  const getTooltipData = () => {
    const isPotentialAttackPaths = dataPoint.name === "Potential Attack Paths";

    if (series === "vuln") {
      return {
        label: dataPoint.vulnLabel,
        value: formatNumber(dataPoint.actualVulnValue),
        percent: dataPoint.vulnPercent,
        buttonText: "View vulnerabilities",
        action: "vulnerability",
        showButton: !isPotentialAttackPaths,
      };
    }

    if (series === "misconfig") {
      return {
        label: dataPoint.misconfigLabel,
        value: dataPoint.isMisconfigExploitNA
          ? "N/A"
          : formatNumber(dataPoint.actualMisconfigValue),
        percent: dataPoint.isMisconfigExploitNA
          ? null
          : dataPoint.misconfigPercent,
        buttonText: "View misconfigurations",
        action: "misconfiguration",
        showButton: !isPotentialAttackPaths,
      };
    }

    return null;
  };

  const tooltipData = getTooltipData();
  if (!tooltipData) return null;

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    // Add your navigation logic here
    console.log(`Navigate to ${tooltipData.action}`);

    // Example navigation (uncomment and modify as needed):
    // const queryParams = new URLSearchParams({
    //   page: '1',
    //   page_size: '10',
    // });
    // if (tooltipData.action === 'vulnerability') {
    //   navigate(`/vulnerabilities?${queryParams.toString()}`);
    // } else if (tooltipData.action === 'misconfiguration') {
    //   navigate(`/misconfigurations?${queryParams.toString()}`);
    // }
  };

  const renderContent = () => (
    <>
      <p className="text-gray-300 text-sm font-medium">{tooltipData.label}</p>
      <p className="text-white text-sm font-bold font-mono mt-2">
        {tooltipData.value}
        {tooltipData.percent && ` - ${tooltipData.percent.toFixed(1)}%`}
      </p>
      {tooltipData.showButton && (
        <>
          <div className="my-3 border-t border-gray-600"></div>
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 px-3 rounded transition-colors duration-200"
            onMouseDown={handleButtonClick}
          >
            {tooltipData.buttonText}
          </button>
        </>
      )}
    </>
  );

  return (
    <div
      style={{
        position: "absolute",
        left: leftPosition,
        top: topPosition,
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
        pointerEvents: "auto",
        minWidth: "200px",
      }}
      className="bg-gray-800 border border-gray-600 rounded-lg p-4 shadow-lg"
      onMouseEnter={() => {
        // Clear any pending hide timeout when hovering over tooltip
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
          hideTimeoutRef.current = null;
        }
      }}
    >
      {renderContent()}
    </div>
  );
};

export default function ThreatAnatomyChart({
  data,
  loading,
}: GraphProps): React.ReactElement {
  // State for hover management
  const [hoveredInfo, setHoveredInfo] = useState<HoveredInfo | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hoverDebounceRef = useRef<NodeJS.Timeout | null>(null);
  const isMouseOverChart = useRef<boolean>(false);

  // Transform API data to chart data
  const chartData = useMemo(() => transformApiDataToChartData(data), [data]);

  // Filter only main data points for labels (exclude interpolated points)
  const mainDataPoints = useMemo(
    () => chartData.filter((point) => !point.name.includes("-interp-")),
    [chartData]
  );

  // Fixed label positioning - centers labels between dividers
  const getStagePosition = (index: number) => {
    const totalStages = mainDataPoints.length;
    const sectionWidth = 100 / totalStages;
    return sectionWidth * index + sectionWidth / 2;
  };

  // Divider positioning remains the same
  const getDividerPosition = (index: number) => {
    const totalStages = mainDataPoints.length;
    return (100 / totalStages) * (index + 1);
  };

  // Clear all timeouts helper function
  const clearAllTimeouts = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    if (hoverDebounceRef.current) {
      clearTimeout(hoverDebounceRef.current);
      hoverDebounceRef.current = null;
    }
  }, []);

  // Improved hover handler
  const debouncedSetHover = useCallback(
    (newHoverInfo: HoveredInfo | null) => {
      // Always clear all existing timeouts first
      clearAllTimeouts();

      // Set hover immediately for responsive feel
      setHoveredInfo(newHoverInfo);
    },
    [clearAllTimeouts]
  );

  // Handle cell mouse movement with improved logic
  const handleCellMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, index: number) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const relativeY = e.clientY - rect.top;
      const isTopHalf = relativeY < rect.height / 2;
      const series = isTopHalf ? "vuln" : "misconfig";

      // Update mouse over state
      isMouseOverChart.current = true;

      // Only update if there's a meaningful change
      if (
        !hoveredInfo ||
        hoveredInfo.index !== index ||
        hoveredInfo.series !== series
      ) {
        debouncedSetHover({ index, series });
      }
    },
    [hoveredInfo, debouncedSetHover]
  );

  // Handle mouse leave with proper cleanup
  const handleMouseLeave = useCallback(() => {
    // Update mouse over state
    isMouseOverChart.current = false;

    // Clear all existing timeouts
    clearAllTimeouts();

    // Set a delayed hide - but check if mouse is still outside after delay
    hideTimeoutRef.current = setTimeout(() => {
      // Only hide if mouse is still not over the chart
      if (!isMouseOverChart.current) {
        setHoveredInfo(null);
        hideTimeoutRef.current = null;
      }
    }, 150); // Slightly longer delay for better UX
  }, [clearAllTimeouts]);

  // Handle mouse enter to cancel hide timeout
  const handleMouseEnter = useCallback(() => {
    // Update mouse over state
    isMouseOverChart.current = true;

    // Clear any pending hide timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  // Cleanup timeouts on unmount
  React.useEffect(() => {
    return () => {
      clearAllTimeouts();
    };
  }, [clearAllTimeouts]);

  // Generate dynamic gradient stops with CORRECTED section alignment
  const dynamicGradients = useMemo(() => {
    // Default gradients (no highlight)
    let vulnStops = [
      { offset: "0%", color: "#FF5757", opacity: 0.4 },
      { offset: "100%", color: "#FF5757", opacity: 0.4 },
    ];

    let misconfigStops = [
      { offset: "0%", color: "#FF740A", opacity: 0.4 },
      { offset: "100%", color: "#FF740A", opacity: 0.4 },
    ];

    // If hovering, create dynamic gradient with highlight for individual sections
    if (hoveredInfo) {
      const { index, series } = hoveredInfo;
      const totalSections = mainDataPoints.length;
      const sectionWidth = 100 / totalSections; // Each section is 25% wide
      const startPercent = index * sectionWidth;
      const endPercent = (index + 1) * sectionWidth;

      if (series === "vuln") {
        vulnStops = [
          { offset: "0%", color: "#FF5757", opacity: 0.4 },
          { offset: `${startPercent}%`, color: "#FF5757", opacity: 0.4 },
          { offset: `${startPercent}%`, color: "#FF5757", opacity: 0.8 }, // Highlight start
          { offset: `${endPercent}%`, color: "#FF5757", opacity: 0.8 }, // Highlight end
          { offset: `${endPercent}%`, color: "#FF5757", opacity: 0.4 },
          { offset: "100%", color: "#FF5757", opacity: 0.4 },
        ];
      } else if (series === "misconfig") {
        misconfigStops = [
          { offset: "0%", color: "#FF740A", opacity: 0.4 },
          { offset: `${startPercent}%`, color: "#FF740A", opacity: 0.4 },
          { offset: `${startPercent}%`, color: "#FF740A", opacity: 0.8 }, // Highlight start
          { offset: `${endPercent}%`, color: "#FF740A", opacity: 0.8 }, // Highlight end
          { offset: `${endPercent}%`, color: "#FF740A", opacity: 0.4 },
          { offset: "100%", color: "#FF740A", opacity: 0.4 },
        ];
      }
    }

    return { vulnStops, misconfigStops };
  }, [hoveredInfo, mainDataPoints]);

  // Loading state
  if (loading) {
    return (
      <div className="bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6 w-full h-[400px]">
        <ChartHeader
          title="Threat Anatomy : The Attack Path Funnel"
          onRemoveWidget={() => {}}
          onExportData={() => {}}
          onSettings={() => {}}
          onMagicClick={() => {}}
        />
        <div className="flex-1 bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl relative min-h-[300px] p-6 flex items-center justify-center">
          <div className="text-gray-400">Loading chart data...</div>
        </div>
      </div>
    );
  }

  // No data state
  if (!chartData || chartData.length === 0) {
    return (
      <div className="bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6 w-full h-[400px]">
        <ChartHeader
          title="Threat Anatomy : The Attack Path Funnel"
          onRemoveWidget={() => {}}
          onExportData={() => {}}
          onSettings={() => {}}
          onMagicClick={() => {}}
        />
        <div className="flex-1 bg-background-dark-neutral border border-border-dark-neutral-neutral rounded-xl relative min-h-[300px] p-6 flex items-center justify-center">
          <div className="text-gray-400">No data available</div>
        </div>
      </div>
    );
  }

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
        {/* Invisible hover cells */}
        <div
          className="absolute inset-0 flex z-20"
          style={{ margin: "60px 0" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {mainDataPoints.map((_, index) => (
            <div
              key={`cell-${index}`}
              className="flex-1 h-full cursor-pointer"
              onMouseMove={(e) => handleCellMouseMove(e, index)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>

        {/* Dynamic vulnerability labels - centered in each section */}
        {mainDataPoints.map((item, index) => (
          <div
            key={`vuln-label-${index}`}
            className="absolute top-6 z-10"
            style={{
              left: `${getStagePosition(index)}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="text-white text-lg font-bold font-mono text-center">
              {formatNumber(item.actualVulnValue)}
            </div>
            <div className="text-gray-400 text-xs whitespace-nowrap text-center">
              {item.vulnLabel}
            </div>
          </div>
        ))}

        {mainDataPoints.map((item, index) =>
          (
            <div
              key={`misconfig-label-${index}`}
              className="absolute bottom-6 z-10"
              style={{
                left: `${getStagePosition(index)}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="text-white text-lg font-bold font-mono text-center">
                {item.isMisconfigExploitNA
                  ? "N/A"
                  : formatNumber(item.actualMisconfigValue)}
              </div>
              <div className="text-gray-400 text-xs whitespace-nowrap text-center">
                {item.misconfigLabel}
              </div>
            </div>
          )
        )}

        {/* Dynamic vertical divider lines */}
        {mainDataPoints.slice(0, -1).map((_, index) => (
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
            data={chartData}
            margin={{ top: 60, right: 0, left: 0, bottom: 60 }}
            stackOffset="none"
          >
            {/* Dynamic gradients based on hover state */}
            <defs>
              <linearGradient id="colorVuln" x1="0" y1="0" x2="1" y2="0">
                {dynamicGradients.vulnStops.map((stop, index) => (
                  <stop
                    key={`vuln-stop-${index}`}
                    offset={stop.offset}
                    stopColor={stop.color}
                    stopOpacity={stop.opacity}
                  />
                ))}
              </linearGradient>
              <linearGradient id="colorMisconfig" x1="0" y1="0" x2="1" y2="0">
                {dynamicGradients.misconfigStops.map((stop, index) => (
                  <stop
                    key={`misconfig-stop-${index}`}
                    offset={stop.offset}
                    stopColor={stop.color}
                    stopOpacity={stop.opacity}
                  />
                ))}
              </linearGradient>
            </defs>

            {/* Center baseline (zero line) */}
            <ReferenceLine
              y={0}
              stroke="#FF5757"
              strokeDasharray="5 5"
              strokeWidth={1}
            />

            <XAxis dataKey="name" type="category" hide={true} />
            <YAxis
              scale="sqrt"
              domain={["dataMin", "dataMax"]}
              hide={true}
              allowDataOverflow={false}
            />

            {/* Vulnerabilities area - above center line with dynamic gradient */}
            <Area
              type="natural"
              dataKey="vulnValue"
              stroke="#FF5757"
              strokeWidth={2}
              fill="url(#colorVuln)"
              activeDot={false}
            />

            {/* Misconfigurations area - below center line with dynamic gradient */}
            <Area
              type="natural"
              dataKey="misconfigValue"
              stroke="#FF740A"
              strokeWidth={2}
              fill="url(#colorMisconfig)"
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* External Custom Tooltip - matching reference design */}
        <CustomExternalTooltip
          info={hoveredInfo}
          hideTimeoutRef={hideTimeoutRef}
          chartData={mainDataPoints}
        />
      </div>
    </div>
  );
}
