// Define standard categories as const object instead of enum to satisfy erasableSyntaxOnly
export const ChartCategory = {
  OPTIMAL: "optimal",
  GOOD: "good", 
  CAUTION: "caution",
  WARNING: "warning",
  CRITICAL: "critical",
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",   
} as const;

// Type for the category values
export type ChartCategory = typeof ChartCategory[keyof typeof ChartCategory];

// Color mapping for categories
export const CATEGORY_COLORS: Record<ChartCategory, string> = {
  [ChartCategory.OPTIMAL]: "#2FD897",
  [ChartCategory.GOOD]: "#4ADE80", 
  [ChartCategory.CAUTION]: "#F59C0B",
  [ChartCategory.WARNING]: "#FFA500",
  [ChartCategory.CRITICAL]: "#FF5757",
  [ChartCategory.HIGH]: "#EF4444",
  [ChartCategory.MEDIUM]: "#F59C0B", 
  [ChartCategory.LOW]: "#22C55E",
}; 