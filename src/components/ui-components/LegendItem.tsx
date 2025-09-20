interface LegendItemProps {
  color: string;
  label: string;
}

export function LegendItem({ color, label }: LegendItemProps) {
  return (
    <div className="flex items-center gap-1">
      <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: color }} />
      <span className="text-text-dark-secondary text-extra-small font-normal">
        {label}
      </span>
    </div>
  );
} 