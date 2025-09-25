interface LegendItemProps {
  color: string;
  label: string;
  onClick?: () => void; // Optional click handler for interactive functionality
  className?: string; // Optional className for additional styling
  disabled?: boolean; // Optional disabled state for visual feedback
}

export function LegendItem({ 
  color, 
  label, 
  onClick, 
  className = "", 
  disabled = false 
}: LegendItemProps) {
  const baseClasses = "flex items-center gap-1";
  const interactiveClasses = onClick ? "cursor-pointer hover:opacity-80 transition-opacity" : "";
  const disabledClasses = disabled ? "opacity-50" : "";
  const finalClasses = `${baseClasses} ${interactiveClasses} ${disabledClasses} ${className}`.trim();

  return (
    <div className={finalClasses} onClick={onClick}>
      <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: color }} />
      <span className="text-text-dark-secondary text-extra-small font-normal">
        {label}
      </span>
    </div>
  );
} 