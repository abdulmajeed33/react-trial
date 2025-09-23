import { ChartCategory } from "../charts/common/chartConstants";

export interface BadgeProps {
  text: string;
  category?: ChartCategory;
  variant?: "default" | "link" | "pill";
  size?: "small" | "medium";
  className?: string;
  onClick?: () => void;
}

export function Badge({
  text,
  category,
  variant = "pill",
  size = "small",
  className = "",
  onClick,
}: BadgeProps) {
  // Base styling
  const baseClasses = "font-normal text-center";
  
  // Size variants
  const sizeClasses = {
    small: "text-extra-small",
    medium: "text-small",
  };

  // Category-based styling
  const getCategoryClasses = (cat?: ChartCategory) => {
    if (!cat) {
      return {
        container: "border rounded-3xl px-3 w-fit bg-background-dark-neutral-two border-border-dark-neutral-neutral",
        text: "text-text-dark-primary"
      };
    }

    switch (cat) {
      case ChartCategory.CRITICAL:
        return {
          container: "bg-background-badge-error border-background-badge-error border rounded-3xl px-3 w-fit",
          text: "text-text-badge-error"
        };
      case ChartCategory.WARNING:
        return {
          container: "bg-background-badge-warning border-background-badge-warning border rounded-3xl px-3 w-fit",
          text: "text-text-badge-warning"
        };
      case ChartCategory.GOOD:
      case ChartCategory.OPTIMAL:
        return {
          container: "bg-background-badge-success border-background-badge-success border rounded-3xl px-3 w-fit",
          text: "text-text-badge-success"
        };
      case ChartCategory.CAUTION:
        return {
          container: "bg-background-badge-caution border-background-badge-caution border rounded-3xl px-3 w-fit",
          text: "text-text-badge-caution"
        };
      default:
        return {
          container: "border rounded-3xl px-3 w-fit bg-background-dark-neutral-two border-border-dark-neutral-neutral",
          text: "text-text-dark-primary"
        };
    }
  };

  // Variant handling
  if (variant === "link") {
    return (
      <button
        onClick={onClick}
        className={`text-extra-small font-semibold p-0 h-auto text-text-badge-primary underline-offset-4 underline hover:no-underline bg-transparent border-none cursor-pointer transition-colors ${className}`}
      >
        {text.toUpperCase()}
      </button>
    );
  }

  // Default pill variant
  const categoryClasses = getCategoryClasses(category);
  const isClickable = onClick !== undefined;

  return (
    <div 
      className={`${categoryClasses.container} ${isClickable ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
      onClick={onClick}
      style={onClick ? { pointerEvents: 'auto' } : undefined}
    >
      <span className={`${categoryClasses.text} ${sizeClasses[size]} ${baseClasses}`}>
        {text}
      </span>
    </div>
  );
} 