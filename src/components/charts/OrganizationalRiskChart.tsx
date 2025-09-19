import React from 'react';

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
            <svg width="10.5" height="10.5" viewBox="0 0 10.5 10.5" fill="none">
              <path d="M0 0H10.5V10.5H0V0Z" stroke="#797F89" strokeWidth="1"/>
              <path d="M5.25 3.5V3.5" stroke="#797F89" strokeWidth="1"/>
              <path d="M4.67 5.25L5.84 7.58" stroke="#797F89" strokeWidth="1"/>
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 flex items-center justify-center">
            <svg width="10.67" height="10.67" viewBox="0 0 10.67 10.67" fill="none">
              <path d="M1.33 2.67L12 13.34" stroke="#7988FF" strokeWidth="1"/>
              <path d="M10.67 -1L14.67 3" stroke="#7988FF" strokeWidth="1"/>
              <path d="M10.67 13L14.67 17" stroke="#7988FF" strokeWidth="1"/>
            </svg>
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <svg width="1.25" height="10" viewBox="0 0 1.25 10" fill="none">
              <path d="M9.38 5L10.63 15" stroke="#797F89" strokeWidth="1"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-3">
        {/* Left side - Circular Chart */}
        <div className="bg-background-dark-neutral-two border border-border-dark-neutral-neutral rounded-xl p-3 flex flex-col justify-end gap-3 w-[178px] h-[236px] relative flex-shrink-0">
          {/* Background chart area with gradient - matches Figma exactly */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <svg 
              className="absolute -left-[22px] top-[21.5px] w-[230.5px] h-[214.5px]"
              viewBox="0 0 231 215" 
              fill="none"
            >
              <defs>
                <linearGradient id="riskGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#FF5757', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#FF5757', stopOpacity:0}} />
                </linearGradient>
              </defs>
              {/* Curved risk visualization matching Figma design */}
              <path 
                d="M50 180 C 50 180 60 120 80 90 C 100 60 140 40 180 50 C 220 60 230 100 220 140 C 210 180 170 200 130 190 C 90 180 70 160 50 180" 
                fill="url(#riskGradient)" 
                stroke="#FF5757" 
                strokeWidth="1"
              />
            </svg>
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