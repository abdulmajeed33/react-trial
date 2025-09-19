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
    <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg p-1">
      {timeRanges.map((range) => (
        <button
          key={range.label}
          className={`px-3 py-2 rounded-md text-xs font-medium transition-colors flex items-center gap-2 ${
            range.active
              ? 'bg-gray-700 text-blue-400'
              : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700'
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