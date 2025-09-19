interface ChartPlaceholderProps {
  title: string;
  description?: string;
  height?: string;
  children?: React.ReactNode;
}

export function ChartPlaceholder({ 
  title, 
  description, 
  height = "h-64",
  children 
}: ChartPlaceholderProps) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-4">
      {/* Chart Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-semibold text-sm">{title}</h3>
          <button className="w-4 h-4 text-gray-400 hover:text-gray-300">
            <svg viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" fill="none" />
              <text x="8" y="12" textAnchor="middle" fontSize="10" fill="currentColor">?</text>
            </svg>
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="w-4 h-4 text-blue-400 hover:text-blue-300">
            <svg viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2L10 6H14L11 9L12 14L8 11L4 14L5 9L2 6H6L8 2Z" />
            </svg>
          </button>
          <button className="w-5 h-5 text-gray-400 hover:text-gray-300">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <circle cx="10" cy="5" r="1.5" />
              <circle cx="10" cy="10" r="1.5" />
              <circle cx="10" cy="15" r="1.5" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Chart Content */}
      <div className={`${height} bg-gray-900 rounded-xl border border-gray-700 flex items-center justify-center`}>
        {children || (
          <div className="text-center">
            <div className="text-gray-400 text-sm font-medium">{title}</div>
            {description && (
              <div className="text-gray-500 text-xs mt-1">{description}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 