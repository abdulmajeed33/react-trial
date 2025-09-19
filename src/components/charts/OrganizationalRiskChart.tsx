import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Risk data for the circular chart
const riskData = [
  { name: 'Critical Risk', value: 75, color: '#FF5757' },
  { name: 'Remaining', value: 25, color: '#1F242F' }
];

interface RiskCategoryCardProps {
  icon: string;
  name: string;
  severity: string;
  status: 'critical' | 'configure';
}

// Risk categories data
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
    <div className="bg-[#0E131C] border border-[#1F242F] rounded-xl p-4 flex flex-col items-center justify-center gap-3 min-h-[120px]">
      <div className="w-6 h-6 flex items-center justify-center">
        <img 
          src={`/icons/${icon}`} 
          alt={name}
          className="w-full h-full object-contain"
          style={{ filter: 'brightness(0) saturate(100%) invert(87%) sepia(6%) saturate(563%) hue-rotate(197deg) brightness(95%) contrast(91%)' }}
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="text-[#F1F3FF] text-xs font-normal leading-[14px] text-center">
          {name}
        </span>
        {status === 'critical' ? (
          <div className="bg-[rgba(255,87,87,0.12)] border border-[rgba(255,87,87,0.12)] rounded-3xl px-2 py-1">
            <span className="text-[#FF5757] text-[10px] font-normal leading-3 text-center">
              {severity}
            </span>
          </div>
        ) : (
          <span className="text-[#7988FF] text-[10px] font-semibold leading-3 text-center">
            {severity.toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
};

const OrganizationalRiskChart: React.FC = () => {
  return (
    <div className="bg-[rgba(22,27,38,0.16)] border border-[#161B26] rounded-2xl p-4 flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <h3 className="text-[#F1F3FF] text-sm font-semibold leading-4">
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
        <div className="bg-[#0E131C] border border-[#1F242F] rounded-xl p-3 flex flex-col justify-end gap-3 w-[178px] h-[236px] relative">
          {/* Background SVG Chart */}
          <div className="absolute -left-[22px] top-[21.5px] w-[230.5px] h-[214.5px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  startAngle={90}
                  endAngle={450}
                  dataKey="value"
                  stroke="#FF5757"
                  strokeWidth={1}
                >
                  {riskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          {/* Content */}
          <div className="flex flex-col gap-3 relative z-10">
            <span className="text-[#F1F3FF] text-base font-normal leading-5 text-center">
              Overall Risk Score
            </span>
            <div className="bg-[rgba(255,87,87,0.12)] border border-[rgba(255,87,87,0.12)] rounded-3xl px-2 py-1 flex justify-center">
              <span className="text-[#FF5757] text-[10px] font-normal leading-3 text-center">
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