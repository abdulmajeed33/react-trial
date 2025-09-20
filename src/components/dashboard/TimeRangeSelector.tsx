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
          variant="ghost"
          size="sm"
          onClick={() => handleRangeClick(range.label)}
          className={`
            h-full px-3 text-label font-normal rounded-none transition-colors
            ${index < timeRanges.length - 1 ? 'border-r border-dark-neutral-neutral' : ''}
            ${
              activeRange === range.label
                ? 'bg-background-dark-neutral-two text-text-dark-primary font-semibold hover:bg-background-dark-neutral-two'
                : 'text-text-dark-secondary hover:text-text-dark-primary hover:bg-background-dark-neutral-two/50'
            }
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