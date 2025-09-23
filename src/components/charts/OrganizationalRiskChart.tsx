import React from "react";
import { ChartHeader } from "../ui-components/ChartHeader";
import { Button } from "../ui/button";
import SimpleAreaChart from "./common/SimpleAreaChart";
import { ChartCategory } from "./common/chartConstants";

// Risk trend data for the area chart - supports both numeric and date string values
// Example data formats:
// 1. Month abbreviations (current)
// 2. Full dates: { x: "2024-01-01", risk: 10 }
// 3. Numeric: { x: 0, risk: 10 }
// 4. Custom labels: { x: "Q1", risk: 10 }
const riskTrendData = [
  { "x": "2025-09-01", "risk": 10 },
  { "x": "2025-09-02", "risk": 12 },
  { "x": "2025-09-03", "risk": 15 },
  { "x": "2025-09-04", "risk": 20 },
  { "x": "2025-09-05", "risk": 30 },
  { "x": "2025-09-06", "risk": 45 },
  { "x": "2025-09-07", "risk": 65 },
  { "x": "2025-09-08", "risk": 80 },
  { "x": "2025-09-09", "risk": 90 },
  { "x": "2025-09-10", "risk": 95 },
  { "x": "2025-09-11", "risk": 98 },
  { "x": "2025-09-12", "risk": 99 },
  { "x": "2025-09-13", "risk": 100 }
];

interface RiskCategoryCardProps {
  name: string;
  severity: string;
  status: "critical" | "configure";
}

// Icon mapping based on category name
const getIconForCategory = (name: string): string => {
  const iconMap: Record<string, string> = {
    "Network": "network-icon.svg",
    "Servers": "server-icon.svg", 
    "Cloud": "cloud-icon.svg",
    "Data": "data-icon.svg",
    "Employees": "employees-icon.svg",
    "Applications": "applications-icon.svg",
    "Suppliers": "suppliers-icon.svg",
    "Devices": "devices-icon.svg",
  };
  return iconMap[name] || "default-icon.svg";
};

// Risk categories data - icons mapped by status/name
const riskCategories: RiskCategoryCardProps[] = [
  {
    name: "Network",
    severity: "Critical",
    status: "critical" as const,
  },
  {
    name: "Servers",
    severity: "Critical",
    status: "critical" as const,
  },
  {
    name: "Cloud",
    severity: "Critical",
    status: "critical" as const,
  },
  {
    name: "Data",
    severity: "Critical",
    status: "critical" as const,
  },
  {
    name: "Employees",
    severity: "Configure",
    status: "configure" as const,
  },
  {
    name: "Applications",
    severity: "Configure",
    status: "configure" as const,
  },
  {
    name: "Suppliers",
    severity: "Configure",
    status: "configure" as const,
  },
  {
    name: "Devices",
    severity: "Configure",
    status: "configure" as const,
  },
];

const RiskCategoryCard: React.FC<RiskCategoryCardProps> = ({
  name,
  severity,
  status,
}) => {
  const icon = getIconForCategory(name);
  
  return (
    <div className="bg-background-dark-neutral-two border border-border-dark-neutral-neutral rounded-xl p-4 flex flex-col items-center justify-center gap-3 h-[112px] flex-1">
      <div className="w-6 h-6 flex items-center justify-center">
        <img
          src={`/icons/${icon}`}
          alt={name}
          className="w-full h-full object-contain"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(87%) sepia(6%) saturate(563%) hue-rotate(197deg) brightness(95%) contrast(91%)",
          }}
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="text-text-dark-primary text-label font-normal text-center">
          {name}
        </span>
        {status === "critical" ? (
          <div className="bg-background-badge-error border border-background-badge-error rounded-3xl px-3">
            <span className="text-text-badge-error text-extra-small font-normal text-center">
              {severity}
            </span>
          </div>
        ) : (
          <Button
            variant="link"
            className="!text-extra-small font-semibold !p-0 !h-auto"
            onClick={() => console.log("Configure clicked for:", name)}
          >
            {severity.toUpperCase()}
          </Button>
        )}
      </div>
    </div>
  );
};

const OrganizationalRiskChart: React.FC = () => {
  return (
    <div className="bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6 w-full">
      {/* Header */}
      <ChartHeader
        title="Organizational Risk"
        onRemoveWidget={() => console.log("Remove widget")}
        onExportData={() => console.log("Export data")}
        onSettings={() => console.log("Settings")}
        onMagicClick={() =>
          console.log("Magic clicked for Organizational Risk")
        }
      />

      {/* Main Content */}
      <div className="flex gap-3">
        {/* Left side - Risk Area Chart */}
        <div className="bg-background-dark-neutral-two border border-border-dark-neutral-neutral rounded-xl w-[178px] h-[236px] relative flex-shrink-0 overflow-hidden">
          {/* Risk Area Chart using SimpleAreaChart component */}
          {/* 
            SimpleAreaChart with overlay content - everything in one component!
            Easy to change chart appearance by switching categories:
            - ChartCategory.CRITICAL (red) - current
            - ChartCategory.WARNING (orange)
            - ChartCategory.CAUTION (yellow)
            - ChartCategory.GOOD (green)
          */}
          <SimpleAreaChart
            data={riskTrendData}
            dataKey="risk"
            category={ChartCategory.CRITICAL}
            gradientId="riskAreaGradient"
            gradientOpacity={{ start: 0.15, end: 0 }}
            strokeWidth={2}
            areaType="natural"
            valueUnit="%"
            tooltipLabel="Risk"
            className="absolute inset-0 overflow-hidden"
            overlayContent={{
              title: "Overall Risk Score",
              badge: {
                text: "Critical",
                category: ChartCategory.CRITICAL
              }
            }}
          />
        </div>

        {/* Right side - Risk Categories Grid */}
        <div className="flex flex-col justify-center gap-3 flex-1">
          {/* Top Row */}
          <div className="grid grid-cols-4 gap-3">
            {riskCategories.slice(0, 4).map((category, index) => (
              <RiskCategoryCard
                key={index}
                name={category.name}
                severity={category.severity}
                status={category.status}
              />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-4 gap-3">
            {riskCategories.slice(4, 8).map((category, index) => (
              <RiskCategoryCard
                key={index + 4}
                name={category.name}
                severity={category.severity}
                status={category.status}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalRiskChart;
