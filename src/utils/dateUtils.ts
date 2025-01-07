import { DrawResult } from '../types/lottery';

export interface DateRange {
  start: string;
  end: string;
}

export const filterDataByDateRange = (data: DrawResult[], dateRange: DateRange): DrawResult[] => {
  const startDate = new Date(dateRange.start);
  const endDate = new Date(dateRange.end);
  
  return data.filter(result => {
    const drawDate = new Date(result.game.draw['draw-date']);
    return drawDate >= startDate && drawDate <= endDate;
  });
};