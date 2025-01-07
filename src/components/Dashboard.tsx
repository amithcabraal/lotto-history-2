import React, { useState } from 'react';
import { DrawMachineChart } from './charts/DrawMachineChart';
import { OddEvenChart } from './charts/OddEvenChart';
import { NumberFrequencyChart } from './charts/NumberFrequencyChart';
import { PrizeAnalysisChart } from './charts/PrizeAnalysisChart';
import { OddEvenPerDrawChart } from './charts/OddEvenPerDrawChart';
import { NumberDistributionHeatMap } from './charts/NumberDistributionHeatMap';
import { ConsecutiveNumbersChart } from './charts/ConsecutiveNumbersChart';
import { NumberSumChart } from './charts/NumberSumChart';
import { NumberRangeChart } from './charts/NumberRangeChart';
import { DateRangeFilter } from './filters/DateRangeFilter';
import { LoadingSpinner } from './LoadingSpinner';
import { useXmlParser } from '../hooks/useXmlParser';
import { DateRange, filterDataByDateRange } from '../utils/dateUtils';
import { 
  processDrawMachineData, 
  processOddEvenSplit,
  processNumberFrequency,
  processPrizeAnalysis,
  processOddEvenPerDraw,
  processNumberDistributionHeatMap,
  processConsecutiveNumbers,
  processDrawNumberStats
} from '../utils/dataProcessing';

export const Dashboard: React.FC = () => {
  const allData = useXmlParser();
  const [dateRange, setDateRange] = useState<DateRange>({
    start: '2024-07-01',
    end: '2025-01-31'
  });

  if (!allData.length) {
    return <LoadingSpinner />;
  }

  const filteredData = filterDataByDateRange(allData, dateRange);
  const drawMachineData = processDrawMachineData(filteredData);
  const oddEvenSplit = processOddEvenSplit(filteredData);
  const numberFrequency = processNumberFrequency(filteredData);
  const prizeAnalysis = processPrizeAnalysis(filteredData);
  const oddEvenPerDraw = processOddEvenPerDraw(filteredData);
  const heatMapData = processNumberDistributionHeatMap(filteredData);
  const consecutiveNumbersData = processConsecutiveNumbers(filteredData);
  const drawNumberStats = processDrawNumberStats(filteredData);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Lottery Analysis Dashboard</h1>
      <DateRangeFilter dateRange={dateRange} onDateRangeChange={setDateRange} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DrawMachineChart data={drawMachineData} />
        <OddEvenChart data={oddEvenSplit} />
        <NumberFrequencyChart data={numberFrequency} />
        <PrizeAnalysisChart data={prizeAnalysis} />
        <OddEvenPerDrawChart data={oddEvenPerDraw} />
        <NumberDistributionHeatMap data={heatMapData} />
        <ConsecutiveNumbersChart data={consecutiveNumbersData} />
        <NumberSumChart data={drawNumberStats} />
        <NumberRangeChart data={drawNumberStats} />
      </div>
    </div>
  );
};