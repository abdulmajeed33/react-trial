import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

// Risk trend data for the area chart - matches exact Figma curve shape
const riskTrendData = [
  { x: 0, risk: 10 },
  { x: 1, risk: 12 },
  { x: 2, risk: 15 },
  { x: 3, risk: 20 },
  { x: 4, risk: 30 },
  { x: 5, risk: 45 },
  { x: 6, risk: 65 },
  { x: 7, risk: 80 },
  { x: 8, risk: 90 },
  { x: 9, risk: 95 },
  { x: 10, risk: 98 },
  { x: 11, risk: 99 },
  { x: 12, risk: 100 }
];

interface RiskCategoryCardProps {
  icon: string;
  name: string;
  severity: string;
  status: 'critical' | 'configure';
}

// Risk categories data - exact as in Figma
const riskCategories: RiskCategoryCardProps[] = [
  {
    icon: 'network-icon.svg',
    name: 'Network',
    severity: 'Critical',
    status: 'critical' as const
  },
  {
    icon: 'server-icon.svg',
    name: 'Servers',
    severity: 'Critical',
    status: 'critical' as const
  },
  {
    icon: 'cloud-icon.svg',
    name: 'Cloud',
    severity: 'Critical',
    status: 'critical' as const
  },
  {
    icon: 'data-icon.svg',
    name: 'Data',
    severity: 'Critical',
    status: 'critical' as const
  },
  {
    icon: 'employees-icon.svg',
    name: 'Employees',
    severity: 'Configure',
    status: 'configure' as const
  },
  {
    icon: 'applications-icon.svg',
    name: 'Applications',
    severity: 'Configure',
    status: 'configure' as const
  },
  {
    icon: 'suppliers-icon.svg',
    name: 'Suppliers',
    severity: 'Configure',
    status: 'configure' as const
  },
  {
    icon: 'devices-icon.svg',
    name: 'Devices',
    severity: 'Configure',
    status: 'configure' as const
  }
];

const RiskCategoryCard: React.FC<RiskCategoryCardProps> = ({ icon, name, severity, status }) => {
  return (
    <div className="bg-background-dark-neutral-two border border-border-dark-neutral-neutral rounded-xl p-4 flex flex-col items-center justify-center gap-3 h-[112px] flex-1">
      <div className="w-6 h-6 flex items-center justify-center">
        <img 
          src={`/icons/${icon}`} 
          alt={name}
          className="w-full h-full object-contain"
          style={{ filter: 'brightness(0) saturate(100%) invert(87%) sepia(6%) saturate(563%) hue-rotate(197deg) brightness(95%) contrast(91%)' }}
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="text-text-dark-primary text-label font-normal text-center">
          {name}
        </span>
        {status === 'critical' ? (
          <div className="bg-background-badge-error border border-background-badge-error rounded-3xl px-2 py-1">
            <span className="text-text-badge-error text-extra-small font-normal text-center">
              {severity}
            </span>
          </div>
        ) : (
          <span className="text-text-badge-primary text-extra-small font-semibold text-center underline">
            {severity.toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
};

const OrganizationalRiskChart: React.FC = () => {
  return (
    <div className="bg-background-dark-neutral-transparent border border-border-dark-neutral-dark rounded-2xl p-4 flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <h3 className="text-text-dark-primary text-body-small font-semibold">
            Organizational Risk
          </h3>
          <div className="w-[14px] h-[14px] flex items-center justify-center">
            <img 
              src="/icons/tooltip-icon.svg" 
              alt="Tooltip"
              className="w-[10.5px] h-[10.5px] object-contain"
            />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 flex items-center justify-center">
            <img 
              src="/icons/magic-icon.svg" 
              alt="Magic"
              className="w-4 h-4 object-contain"
            />
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <img 
              src="/icons/more-icon.svg" 
              alt="More"
              className="w-[1.25px] h-[10px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-3">
        {/* Left side - Risk Area Chart */}
        <div className="bg-background-dark-neutral-two border border-border-dark-neutral-neutral rounded-xl p-3 flex flex-col justify-end gap-3 w-[178px] h-[236px] relative flex-shrink-0">
                    {/* Risk Area Chart using Recharts - properly contained */}
          <div className="absolute inset-3 overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart 
                data={riskTrendData} 
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                  <defs>
                    <linearGradient id="riskAreaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF5757" stopOpacity={1} />
                      <stop offset="100%" stopColor="#FF5757" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="natural"
                    dataKey="risk"
                    stroke="#FF5757"
                    strokeWidth={2}
                    fill="url(#riskAreaGradient)"
                    fillOpacity={1}
                    dot={false}
                    activeDot={false}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          
          {/* Content */}
          <div className="flex flex-col gap-3 relative z-10">
            <span className="text-text-dark-primary text-body font-normal text-center">
              Overall Risk Score
            </span>
            <div className="bg-background-badge-error border border-background-badge-error rounded-3xl px-2 py-1 flex justify-center">
              <span className="text-text-badge-error text-extra-small font-normal text-center">
                Critical
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Risk Categories Grid */}
        <div className="flex flex-col justify-center gap-3 flex-1">
          {/* Top Row */}
          <div className="grid grid-cols-4 gap-3">
            {riskCategories.slice(0, 4).map((category, index) => (
              <RiskCategoryCard
                key={index}
                icon={category.icon}
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
                icon={category.icon}
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