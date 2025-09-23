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
  ASSETS: "assets",
  MTTD: "mttd",
  MTTR: "mttr",
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
  [ChartCategory.HIGH]: "#FF740A",
  [ChartCategory.MEDIUM]: "#F59C0B", 
  [ChartCategory.LOW]: "#7988FF",
  [ChartCategory.ASSETS]: "#7988FF",
  [ChartCategory.MTTD]: "#7988FF",
  [ChartCategory.MTTR]: "#F59C0B",
}; 