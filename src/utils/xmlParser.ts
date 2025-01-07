export const parseXmlToJson = (xmlString: string) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const drawResults = Array.from(xmlDoc.getElementsByTagName('draw-results'));
  
  return drawResults.map(result => ({
    game: {
      draw: {
        'draw-number': result.querySelector('draw > draw-number')?.textContent || '',
        'draw-date': result.querySelector('draw > draw-date')?.textContent || '',
        'draw-machine': result.querySelector('draw > draw-machine')?.textContent || ''
      },
      balls: {
        set: result.querySelector('balls > set')?.textContent || '',
        ball: Array.from(result.querySelectorAll('balls > ball')).map(ball => ({
          _: ball.textContent || '',
          $: { number: ball.getAttribute('number') || '' }
        })),
        'bonus-ball': {
          _: result.querySelector('balls > bonus-ball')?.textContent || '',
          $: {
            type: result.querySelector('balls > bonus-ball')?.getAttribute('type') || '',
            number: result.querySelector('balls > bonus-ball')?.getAttribute('number') || ''
          }
        }
      },
      winners: {
        confirmed: result.querySelector('winners > confirmed')?.textContent || '',
        'prize-tiers': {
          'prize-tier': Array.from(result.querySelectorAll('winners > prize-tiers > prize-tier')).map(tier => ({
            level: tier.querySelector('level')?.textContent || '',
            'number-of-winners': tier.querySelector('number-of-winners')?.textContent || '',
            'win-value': tier.querySelector('win-value')?.textContent || '',
            'prize-type': tier.querySelector('prize-type')?.textContent || ''
          }))
        }
      },
      rollover: result.querySelector('rollover')?.textContent || '',
      'rollover-count': result.querySelector('rollover-count')?.textContent || '',
      'next-estimated-jackpot': result.querySelector('next-estimated-jackpot')?.textContent || '0'
    }
  }));
};