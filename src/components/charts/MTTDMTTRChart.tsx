import AreaChart from './common/AreaChart';
import { ChartCategory } from './common/chartConstants';

// Chart data with categories array
const chartData = [
  { 
    name: 'Mar', 
    mttd: 3, 
    mttr: 10,
    categories: [ChartCategory.MTTD, ChartCategory.MTTR]
  },
  { 
    name: 'Apr', 
    mttd: 2, 
    mttr: 8,
    categories: [ChartCategory.MTTD, ChartCategory.MTTR]
  },
  { 
    name: 'May', 
    mttd: 5.5, 
    mttr: 5,
    categories: [ChartCategory.MTTD, ChartCategory.MTTR]
  },
  { 
    name: 'Jun', 
    mttd: 6, 
    mttr: 6.5,
    categories: [ChartCategory.MTTD, ChartCategory.MTTR]
  },
  { 
    name: 'Jul', 
    mttd: 5, 
    mttr: 10,
    categories: [ChartCategory.MTTD, ChartCategory.MTTR]
  },
  { 
    name: 'Aug', 
    mttd: 3, 
    mttr: 9,
    categories: [ChartCategory.MTTD, ChartCategory.MTTR]
  }
];

const MTTDMTTRChart: React.FC = () => {
  return (
    <AreaChart
      title="MTTD & MTTR Trends"
      data={chartData}
      dataKeys={['mttd', 'mttr']}
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