import { ChartPlaceholder } from '../charts/ChartPlaceholder';
import { TimeRangeSelector } from './TimeRangeSelector';

export function MainContent() {
  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex justify-end">
        <TimeRangeSelector />
      </div>
      
      {/* First Row - Organizational Risk */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <ChartPlaceholder 
            title="Organizational Risk" 
            description="Risk assessment with asset breakdown"
            height="h-80"
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <ChartPlaceholder 
            title="MTTD & MTTR Trends" 
            description="Mean Time to Detect/Respond trends"
            height="h-80"
          />
        </div>
      </div>
      
      {/* Second Row - Compliance Charts */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <ChartPlaceholder 
            title="Compliance" 
            description="Overall compliance metrics"
            height="h-72"
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <ChartPlaceholder 
            title="Patching Compliance by Team" 
            description="Team-based compliance breakdown"
            height="h-72"
          />
        </div>
      </div>
      
      {/* Third Row - Risk & Awareness */}
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