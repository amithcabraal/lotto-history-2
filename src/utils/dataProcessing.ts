import { DrawResult, ChartData, PrizeAnalysisData, OddEvenPerDrawData, HeatMapData, ConsecutiveNumbersData, DrawNumberStats } from '../types/lottery';

export const processDrawNumberStats = (results: DrawResult[]): DrawNumberStats[] => {
  return results.map(result => {
    const numbers = result.game.balls.ball
      .map(ball => parseInt(ball._))
      .filter(num => !isNaN(num));
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    
    return {
      date: result.game.draw['draw-date'],
      sum,
      min,
      max,
      range: max - min
    };
  });
};

export const processConsecutiveNumbers = (results: DrawResult[]): ConsecutiveNumbersData[] => {
  return results.map(result => {
    const numbers = result.game.balls.ball
      .map(ball => parseInt(ball._))
      .filter(num => !isNaN(num))
      .sort((a, b) => a - b);
    
    let consecutiveCount = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i + 1] - numbers[i] === 1) {
        consecutiveCount++;
      }
    }
    
    return {
      date: result.game.draw['draw-date'],
      count: consecutiveCount
    };
  });
};

export const processDrawMachineData = (results: DrawResult[]): ChartData[] => {
  const machines: { [key: string]: number } = {};
  
  results.forEach(result => {
    const machine = result.game.draw['draw-machine'];
    machines[machine] = (machines[machine] || 0) + 1;
  });
  
  return Object.entries(machines)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
};

export const processOddEvenSplit = (results: DrawResult[]): ChartData[] => {
  let oddCount = 0;
  let evenCount = 0;
  
  results.forEach(result => {
    result.game.balls.ball.forEach(ball => {
      const number = parseInt(ball._);
      if (number % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    });
  });
  
  return [
    { name: 'Odd', value: oddCount },
    { name: 'Even', value: evenCount }
  ];
};

export const processNumberFrequency = (results: DrawResult[]): ChartData[] => {
  const frequency: { [key: string]: number } = {};
  
  results.forEach(result => {
    result.game.balls.ball.forEach(ball => {
      const number = ball._;
      frequency[number] = (frequency[number] || 0) + 1;
    });
  });
  
  return Object.entries(frequency)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => parseInt(a.name) - parseInt(b.name));
};

export const processPrizeAnalysis = (results: DrawResult[]): PrizeAnalysisData[] => {
  return results.map(result => {
    const prizeTiers = result.game.winners['prize-tiers']['prize-tier'];
    const biggestWin = prizeTiers.reduce((max, tier) => {
      const winValue = parseFloat(tier['win-value']);
      return winValue > 0 ? Math.max(max, winValue) : max;
    }, 0);
    
    return {
      date: result.game.draw['draw-date'],
      biggestWin,
      nextEstimated: parseFloat(result.game['next-estimated-jackpot'].replace(/,/g, ''))
    };
  });
};

export const processOddEvenPerDraw = (results: DrawResult[]): OddEvenPerDrawData[] => {
  return results.map(result => {
    let oddCount = 0;
    let evenCount = 0;
    
    result.game.balls.ball.forEach(ball => {
      const number = parseInt(ball._);
      if (number % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    });
    
    return {
      date: result.game.draw['draw-date'],
      odd: oddCount,
      even: evenCount
    };
  });
};

export const processNumberDistributionHeatMap = (results: DrawResult[]): HeatMapData[] => {
  const distribution: { [key: string]: number } = {};
  
  results.forEach(result => {
    result.game.balls.ball.forEach((ball, position) => {
      const number = parseInt(ball._);
      if (!isNaN(number)) {
        const key = `${position + 1}-${number}`;
        distribution[key] = (distribution[key] || 0) + 1;
      }
    });
  });
  
  return Object.entries(distribution).map(([key, frequency]) => {
    const [position, number] = key.split('-').map(Number);
    return { position, number, frequency };
  });
};