import React from "react";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import { ChartCategory, CATEGORY_COLORS } from "./chartConstants";

/**
 * SimpleAreaChart - A flexible area chart component for embedded/overlay usage
 * 
 * Features:
 * - Category-based styling using chartConstants
 * - Custom gradient backgrounds
 * - Configurable tooltips with unit formatting
 * - No axes or grid lines for clean overlay appearance
 * - Overlay content support (titles, badges, custom content)
 * - Absolute positioning for container coverage
 * 
 * Example usage:
 * ```tsx
 * // Basic usage with category
 * <SimpleAreaChart 
 *   data={data} 
 *   dataKey="risk" 
 *   category={ChartCategory.CRITICAL} 
 * />
 * 
 * // With overlay content
 * <SimpleAreaChart 
 *   data={data} 
 *   dataKey="risk" 
 *   category={ChartCategory.CRITICAL}
 *   overlayContent={{
 *     title: "Overall Risk Score",
 *     badge: { text: "Critical", category: ChartCategory.CRITICAL }
 *   }}
 * />
 * 
 * // With custom overlay content
 * <SimpleAreaChart 
 *   data={data} 
 *   dataKey="performance" 
 *   category={ChartCategory.GOOD}
 *   overlayContent={{
 *     customContent: <CustomComponent />
 *   }}
 * />
 * ```
 */

export interface SimpleAreaChartData {
  x: number;
  [key: string]: number; // Allow flexible data keys
}

export interface OverlayContentProps {
  title?: string;
  badge?: {
    text: string;
    category?: ChartCategory;
    customStyle?: string; // Custom CSS classes for badge
  };
  customContent?: React.ReactNode; // For completely custom overlay content
}

export interface SimpleAreaChartProps {
  data: SimpleAreaChartData[];
  dataKey: string;
  category?: ChartCategory; // Use category instead of direct color
  color?: string; // Fallback color when no category is provided
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
  valueUnit?: '%' | 'hrs' | 'count' | ''; // For default tooltip formatting
  className?: string;
  style?: React.CSSProperties;
  // Overlay content props
  overlayContent?: OverlayContentProps;
  containerClassName?: string; // Additional classes for the entire container
}

const SimpleAreaChart: React.FC<SimpleAreaChartProps> = ({
  data,
  dataKey,
  category,
  color,
  gradientId,
  gradientOpacity = { start: 0.15, end: 0 },
  strokeWidth = 2,
  areaType = "natural",
  showTooltip = true,
  tooltipFormatter,
  tooltipLabel,
  valueUnit = '%',
  className = "absolute inset-0 overflow-hidden rounded-xl",
  style = { zIndex: 1 },
  overlayContent,
  containerClassName = "",
}) => {
  // Determine final color based on category or fallback
  const finalColor = category ? CATEGORY_COLORS[category] : (color || "#FF5757");
  const finalGradientId = gradientId || `${dataKey}AreaGradient`;
  
  const defaultTooltipFormatter = (value: number) => {
    let displayValue = `${value}`;
    if (valueUnit === '%') displayValue = `${value}%`;
    else if (valueUnit === 'hrs') displayValue = `${value} hr${value === 1 ? '' : 's'}`;
    else if (valueUnit === 'count') displayValue = `${value}`;
    else if (valueUnit) displayValue = `${value} ${valueUnit}`;

    return (
      <span style={{ color: finalColor }} className="text-extra-small font-normal">
        {displayValue}
      </span>
    );
  };

  const finalTooltipFormatter = tooltipFormatter || defaultTooltipFormatter;
  const finalTooltipLabel = tooltipLabel || dataKey.charAt(0).toUpperCase() + dataKey.slice(1);

  // Helper function to get badge styling based on category
  const getBadgeStyle = (badgeCategory?: ChartCategory) => {
    // Default badge styling based on category
    const baseClasses = "border rounded-3xl px-3 w-fit";
    
    if (badgeCategory === ChartCategory.CRITICAL) {
      return `bg-background-badge-error border-background-badge-error ${baseClasses}`;
    } else if (badgeCategory === ChartCategory.WARNING) {
      return `bg-background-badge-warning border-background-badge-warning ${baseClasses}`;
    } else if (badgeCategory === ChartCategory.GOOD || badgeCategory === ChartCategory.OPTIMAL) {
      return `bg-background-badge-success border-background-badge-success ${baseClasses}`;
    } else {
      // Fallback styling using the chart color
      return `${baseClasses}`;
    }
  };

  const getBadgeTextStyle = (badgeCategory?: ChartCategory) => {
    if (badgeCategory === ChartCategory.CRITICAL) {
      return "text-text-badge-error text-extra-small font-normal";
    } else if (badgeCategory === ChartCategory.WARNING) {
      return "text-text-badge-warning text-extra-small font-normal";
    } else if (badgeCategory === ChartCategory.GOOD || badgeCategory === ChartCategory.OPTIMAL) {
      return "text-text-badge-success text-extra-small font-normal";
    } else {
      return "text-extra-small font-normal";
    }
  };

  return (
    <div className={`relative w-full h-full ${containerClassName}`}>
      {/* Chart Layer */}
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
                <stop offset="0%" stopColor={finalColor} stopOpacity={gradientOpacity.end} />
                <stop offset="100%" stopColor={finalColor} stopOpacity={gradientOpacity.start} />
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
                  color: finalColor,
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
              stroke={finalColor}
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

      {/* Overlay Content Layer */}
      {overlayContent && (
        <div 
          className="absolute inset-0 flex flex-col justify-end gap-3 p-3" 
          style={{ 
            zIndex: 10, 
            pointerEvents: 'none' // Allow mouse events to pass through to chart
          }}
        >
          {overlayContent.customContent ? (
            overlayContent.customContent
          ) : (
            <>
              {overlayContent.title && (
                <span className="text-text-dark-primary text-body font-normal text-center">
                  {overlayContent.title}
                </span>
              )}
              {overlayContent.badge && (
                <div 
                  className={
                    overlayContent.badge.customStyle || 
                    getBadgeStyle(overlayContent.badge.category)
                  }
                  style={{ pointerEvents: 'auto' }} // Re-enable events for interactive badge
                >
                  <span className={getBadgeTextStyle(overlayContent.badge.category)}>
                    {overlayContent.badge.text}
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SimpleAreaChart; 