import AreaChart from './common/AreaChart';
import { ChartCategory } from './common/chartConstants';

// Chart data without categories array - categories are now handled by dataKeys configuration
const chartData = [
  { 
    name: 'Mar', 
    mttd: 3, 
    mttr: 10,
  },
  { 
    name: 'Apr', 
    mttd: 2, 
    mttr: 8,
  },
  { 
    name: 'May', 
    mttd: 5.5, 
    mttr: 5,
  },
  { 
    name: 'Jun', 
    mttd: 6, 
    mttr: 6.5,
  },
  { 
    name: 'Jul', 
    mttd: 5, 
    mttr: 10,
  },
  { 
    name: 'Aug', 
    mttd: 3, 
    mttr: 9,
  },
  {
    name: 'Sep',
    mttd: 0,
    mttr: 0,
  }
];

const MTTDMTTRChart: React.FC = () => {
  return (
    <AreaChart
      title="MTTD & MTTR Trends"
      data={chartData}
      dataKeys={[
        { key: 'mttd', category: ChartCategory.MTTD },
        { key: 'mttr', category: ChartCategory.MTTR },
      ]}
      valueUnit="hrs"
      height={246}
      showLegend={true}
      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      areaType="monotone"
      strokeWidth={1}
      showDots={false}
      showActiveDots={false}
      yAxisTicks={[0, 2, 4, 6, 8, 10]}
      domain={[0, 10]}
      referenceLines={[2, 4, 6, 8, 10]}
      yAxisFormatter={(value) => `${value} hr${value === 1 ? '' : 's'}`}
      useGradients={true}
      onRemoveWidget={() => console.log('Remove widget')}
      onExportData={() => console.log('Export data')}
      onSettings={() => console.log('Settings')}
      onMagicClick={() => console.log('Magic clicked for MTTD & MTTR Trends')}
    />
  );
};

export default MTTDMTTRChart; 