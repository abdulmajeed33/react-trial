import { ChartPlaceholder } from '../charts/ChartPlaceholder';
import { TimeRangeSelector } from './TimeRangeSelector';
import OrganizationalRiskChart from '../charts/OrganizationalRiskChart';
import MTTDMTTRChart from '../charts/MTTDMTTRChart';
import ComplianceChart from '../charts/ComplianceChart';

export function MainContent() {
  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex justify-end">
        <TimeRangeSelector />
      </div>
      
      {/* First Row - Organizational Risk (Full Width) */}
      <div className="w-full">
        <OrganizationalRiskChart />
      </div>
      
      {/* Second Row - MTTD & MTTR Trends */}
      <div className="w-full">
        <MTTDMTTRChart />
      </div>
      
      {/* Third Row - Compliance Charts */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <ComplianceChart />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <ChartPlaceholder 
            title="Patching Compliance by Team" 
            description="Team-based compliance breakdown"
            height="h-72"
          />
        </div>
      </div>
      
      {/* Fourth Row - Risk & Awareness */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <ChartPlaceholder 
            title="Top Riskiest Assets" 
            description="Asset risk distribution"
            height="h-72"
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <ChartPlaceholder 
            title="Security Awareness Score" 
            description="Quarterly awareness metrics"
            height="h-72"
          />
        </div>
      </div>
    </div>
  );
} 