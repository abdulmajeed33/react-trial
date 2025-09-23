import { TimeRangeSelector } from './TimeRangeSelector';
import OrganizationalRiskChart from '../charts/OrganizationalRiskChart';
import MTTDMTTRChart from '../charts/MTTDMTTRChart';
import ComplianceChart from '../charts/ComplianceChart';
import PatchingComplianceChart from '../charts/PatchingComplianceChart';
import SecurityAwarenessChart from '../charts/SecurityAwarenessChart';
import TopRiskiestAssetsChart from '../charts/TopRiskiestAssetsChart';
import SecurityAwarenessLineChart from '../charts/SecurityAwarenessLineChart';
import PhishingStatsChart from '../charts/PhishingStatsChart';
import TopRiskiestVulnerabilitiesChart from '../charts/TopRiskiestVulnerabilitiesChart';
import AssetsChart from '../charts/AssetsChart';
import AvgVulnerabilityAgeChart from '../charts/AvgVulnerabilityAgeChart';
import RiskiestTeamsChart from '../charts/RiskiestTeamsChart';
import SLABreachesChart from '../charts/SLABreachesChart';
import ControlHealthChart from '../charts/ControlHealthChart';
import ControlCoverageChart from '../charts/ControlCoverageChart';
import TopAttackVectorsChart from '../charts/TopAttackVectorsChart';
import OpenCasesChart from '../charts/OpenCasesChart';

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
          <PatchingComplianceChart />
        </div>
      </div>
      
      {/* Fourth Row - Risk & Awareness */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
            <TopRiskiestAssetsChart />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <SecurityAwarenessChart />
        </div>
      </div>

      {/* Fifth Row - Security Awareness Line Chart */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
            <SecurityAwarenessLineChart />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <PhishingStatsChart />
        </div>
      </div>

      {/* Sixth Row - Top Riskiest Vulnerabilities */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <TopRiskiestVulnerabilitiesChart />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <AssetsChart />
        </div>
      </div>

      {/* Seventh Row - Avg. Vulnerability Age */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <AvgVulnerabilityAgeChart />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <RiskiestTeamsChart />
        </div>
      </div>

      {/* Eighth Row - SLABreachesChart */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <SLABreachesChart />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <ControlHealthChart />
        </div>
      </div>

      {/* Ninth Row - Control Coverage */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <ControlCoverageChart />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <TopAttackVectorsChart />
        </div>
      </div>

      {/* Tenth Row - Open Cases */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <OpenCasesChart />
        </div>
      </div>
    </div>
  );
} 