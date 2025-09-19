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
    <div className="bg-background-dark-neutral-three border border-border-dark-neutral-three rounded-2xl p-4">
      {/* Chart Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-text-dark-primary font-semibold text-body-small">{title}</h3>
          <button className="w-4 h-4 text-icon-dark-neutral-neutral hover:text-icon-dark-neutral-active">
            <svg viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" fill="none" />
              <text x="8" y="12" textAnchor="middle" fontSize="8" fill="currentColor">?</text>
            </svg>
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="w-4 h-4 text-status-blue hover:text-text-dark-button-outline-hover">
            <svg viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2L10 6H14L11 9L12 14L8 11L4 14L5 9L2 6H6L8 2Z" />
            </svg>
          </button>
          <button className="w-5 h-5 text-icon-dark-neutral-neutral hover:text-icon-dark-neutral-active">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <circle cx="10" cy="5" r="1.5" />
              <circle cx="10" cy="10" r="1.5" />
              <circle cx="10" cy="15" r="1.5" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Chart Content */}
      <div className={`${height} bg-background-dark-neutral-two rounded-xl border border-border-dark-neutral-neutral flex items-center justify-center`}>
        {children || (
          <div className="text-center">
            <div className="text-text-dark-secondary text-label font-medium">{title}</div>
            {description && (
              <div className="text-text-dark-disabled text-extra-small mt-1">{description}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 