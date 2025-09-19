import { Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';

const timeRanges = [
  { label: 'Custom', active: false },
  { label: 'Today', active: false },
  { label: 'Yesterday', active: false },
  { label: '7D', active: true },
  { label: '30D', active: false },
  { label: '3M', active: false },
  { label: '6M', active: false },
];

export function TimeRangeSelector() {
  const [activeRange, setActiveRange] = useState('7D');

  const handleRangeClick = (label: string) => {
    setActiveRange(label);
    console.log('Selected time range:', label);
  };

  return (
    <div className="flex items-center h-8 border border-dark-neutral-neutral rounded-md bg-transparent">
      {timeRanges.map((range, index) => (
        <Button
          key={range.label}
          variant="time-range"
          size="time-range"
          data-active={activeRange === range.label}
          onClick={() => handleRangeClick(range.label)}
          className={`
            ${index < timeRanges.length - 1 ? 'border-r border-dark-neutral-neutral' : ''}
          `}
        >
          {range.label === 'Custom' && (
            <Calendar className="w-3.5 h-3.5 text-icon-dark-neutral-neutral" />
          )}
          {range.label}
        </Button>
      ))}
    </div>
  );
} 