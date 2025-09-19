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
    <div className="flex items-center h-8 border border-[#1F242F] rounded-md bg-transparent">
      {timeRanges.map((range, index) => (
        <button
          key={range.label}
          className={`
            flex items-center justify-center gap-2 px-3 h-full text-xs font-normal transition-colors
            ${index < timeRanges.length - 1 ? 'border-r border-[#1F242F]' : ''}
            ${
              range.active
                ? 'bg-[#0E131C] text-[#F1F3FF] font-semibold'
                : 'text-[#B6BCC3] hover:text-[#F1F3FF] hover:bg-[#0E131C]/50'
            }
          `}
        >
          {range.label === 'Custom' && (
            <Calendar className="w-3.5 h-3.5 text-[#797F89]" />
          )}
          {range.label}
        </button>
      ))}
    </div>
  );
} 