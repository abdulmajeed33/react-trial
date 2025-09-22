import PieChart from './common/PieChart';
import type { PieChartData } from './common/PieChart';

export interface TopRiskiestAssetsChartProps {
  onRemoveWidget?: () => void;
  onExportData?: () => void;
  onSettings?: () => void;
  onMagicClick?: () => void;
}

export default function TopRiskiestAssetsChart({
  onRemoveWidget,
  onExportData,
  onSettings,
  onMagicClick,
}: TopRiskiestAssetsChartProps) {
  
  const data: PieChartData[] = [
    { name: 'Critical', value: 35, color: '#FF5757' },
    { name: 'High', value: 30, color: '#FF740A' },
    { name: 'Medium', value: 25, color: '#F59C0B' },
    { name: 'Low', value: 10, color: '#7988FF' },
  ];

  return (
    <PieChart
      title="Top Riskiest Assets"
      data={data}
      valueUnit="%"
      valueLabel="Risk Level"
      height={244}
      innerRadius={70}
      outerRadius={100}
      paddingAngle={2}
      showLegend={true}
      onRemoveWidget={onRemoveWidget}
      onExportData={onExportData}
      onSettings={onSettings}
      onMagicClick={onMagicClick}
    />
  );
}
