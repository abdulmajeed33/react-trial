import { Calendar } from 'lucide-react';

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
  return (
    <div className="flex items-center h-8 border border-dark-neutral-neutral rounded-md bg-transparent">
      {timeRanges.map((range, index) => (
        <button
          key={range.label}
          className={`
            flex items-center justify-center gap-2 px-3 h-full text-label font-normal transition-colors
            ${index < timeRanges.length - 1 ? 'border-r border-dark-neutral-neutral' : ''}
            ${
              range.active
                ? 'bg-background-dark-neutral-two text-text-dark-primary font-semibold'
                : 'text-text-dark-secondary hover:text-text-dark-primary hover:bg-background-dark-neutral-two/50'
            }
          `}
        >
          {range.label === 'Custom' && (
            <Calendar className="w-3.5 h-3.5 text-icon-dark-neutral-neutral" />
          )}
          {range.label}
        </button>
      ))}
    </div>
  );
} 