// Add to existing types
export interface DrawNumberStats {
  date: string;
  sum: number;
  min: number;
  max: number;
  range: number;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface DateRange {
  start: string;
  end: string;
}

export interface HeatMapData {
  position: number;
  number: number;
  frequency: number;
}

export interface ConsecutiveNumbersData {
  date: string;
  count: number;
}

export interface PrizeAnalysisData {
  date: string;
  biggestWin: number;
  nextEstimated: number;
}

export interface OddEvenPerDrawData {
  date: string;
  odd: number;
  even: number;
}