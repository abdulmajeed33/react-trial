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
    <div className="flex items-center gap-0 bg-background-dark-neutral-three border border-border-dark-neutral-three rounded-lg p-1">
      {timeRanges.map((range) => (
        <button
          key={range.label}
          className={`px-3 py-2 rounded-md text-label font-medium transition-colors flex items-center gap-2 ${
            range.active
              ? 'bg-background-dark-neutral-two text-status-blue'
              : 'text-text-dark-secondary hover:text-text-dark-primary hover:bg-background-dark-neutral-two'
          }`}
        >
          {range.label === 'Custom' && (
            <Calendar className="w-3 h-3" />
          )}
          {range.label}
        </button>
      ))}
    </div>
  );
} 