import React from 'react';
import { DateRange } from '../../types/lottery';

interface Props {
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
}

export const DateRangeFilter: React.FC<Props> = ({ dateRange, onDateRangeChange }) => {
  return (
    <div className="flex gap-4 items-center mb-6">
      <div>
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">From</label>
        <input
          type="date"
          id="startDate"
          value={dateRange.start}
          onChange={(e) => onDateRangeChange({ ...dateRange, start: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">To</label>
        <input
          type="date"
          id="endDate"
          value={dateRange.end}
          onChange={(e) => onDateRangeChange({ ...dateRange, end: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
    </div>
  );
};