export interface DrawResult {
  game: {
    draw: {
      'draw-number': string;
      'draw-date': string;
      'draw-machine': string;
    };
    balls: {
      set: string;
      ball: Array<{
        _: string;
        $: { number: string };
      }>;
      'bonus-ball': {
        _: string;
        $: { type: string; number: string };
      };
    };
    winners: {
      confirmed: string;
      'prize-tiers': {
        'prize-tier': Array<{
          level: string;
          'number-of-winners': string;
          'win-value': string;
          'prize-type': string;
        }>;
      };
    };
    rollover: string;
    'rollover-count': string;
    'next-estimated-jackpot': string;
  };
}

export interface ChartData {
  name: string;
  value: number;
}