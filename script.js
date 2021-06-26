const colors = {
  advanced: '#9B0000',
  intermediate: '#469BFF',
  beginner: '#FF8C00',
}

const leaderboard = [
  {
    pos: '1',
    name: 'JD - 679743 (winner)',
    team: 'advanced',
    point: '12.5'
  },
  {
    pos: '2',
    name: 'SL - 654683',
    team: 'advanced',
    point: '12'
  },
  {
    pos: '3',
    name: 'RM - 735259',
    team: 'advanced',
    point: '10.5'
  },
  {
    pos: '4',
    name: 'MB - 685503 (winner)',
    team: 'beginner',
    point: '9'
  },
  {
    pos: '5',
    name: 'DC - 722318',
    team: 'advanced',
    point: '8'
  },
  {
    pos: '5',
    name: 'YK - 944962',
    team: 'intermediate',
    point: '8'
  },
  {
    pos: '7',
    name: 'KJ - 851236',
    team: 'beginner',
    point: '7'
  }, 
  {
    pos: '8',
    name: 'PT - 700164',
    team: 'advanced',
    point: '6'
  },
  {
    pos: '9',
    name: 'AS - 716884',
    team: 'beginner',
    point: '5.5'
  },
  {
    pos: '10',
    name: 'JW - 684244',
    team: 'advanced',
    point: '5'
  },
  {
    pos: '10',
    name: 'SR - 652547',
    team: 'beginner',
    point: '5'
  },
  {
    pos: '12',
    name: 'RG - 700603',
    team: 'advanced',
    point: '4'
  },
  {
    pos: '12',
    name: 'JS - 680704',
    team: 'beginner',
    point: '4'
  },
  {
    pos: '14',
    name: 'NM - 944993',
    team: 'advanced',
    point: '3'
  },
  {
    pos: '15',
    name: 'AA - 656231',
    team: 'advanced',
    point: '2.5'
  },
  {
    pos: '15',
    name: 'NN - 764713',
    team: 'advanced',
    point: '2.5'
  },
  {
    pos: '17',
    name: 'CR - 692031',
    team: 'beginner',
    point: '2'
  },
  {
    pos: '17',
    name: 'JK - 786450',
    team: 'beginner',
    point: '2'
  },
  {
    pos: '19',
    name: 'AH - 944942',
    team: 'advanced',
    point: '1'
  },
  {
    pos: '19',
    name: 'KL - 666947',
    team: 'beginner',
    point: '1'
  },
  {
    pos: '19',
    name: 'MP - 717354',
    team: 'beginner',
    point: '1'
  },
  {
    pos: '19',
    name: 'OP - 684356',
    team: 'beginner',
    point: '1'
  },
  {
    pos: '23',
    name: 'AK - 654920',
    team: 'advanced',
    point: '0.5'
  },
  {
    pos: '23',
    name: 'IS - 712492',
    team: 'intermediate',
    point: '0.5'
  },
  {
    pos: '23',
    name: 'HM - 681469',
    team: 'beginner',
    point: '0.5'
  },
  {
    pos: '23',
    name: 'MN - 853409',
    team: 'beginner',
    point: '0.5'
  },
  {
    pos: '23',
    name: 'NJ - 732643',
    team: 'beginner',
    point: '0.5'
  },
  {
    pos: '28',
    name: 'AH - 772680',
    team: 'beginner',
    point: '0'
  },
  {
    pos: '28',
    name: 'AW - 680352',
    team: 'beginner',
    point: '0'
  },
  {
    pos: '28',
    name: 'PS - 703874',
    team: 'beginner',
    point: '0'
  },
];

const main = d3
  .select('table');

const drivers = main
  .selectAll('tr.driver')
  .data(leaderboard)
  .enter()
  .append('tr')
  .attr('class', 'driver');

drivers
  .append('td')
  .text((d, i) => leaderboard[i].pos)
  .attr('class', 'position');

drivers
  .append('td')
  .html (({name, team}) => `${name.split(' ').map((part, index) => index > 0 ? `<strong>${part}</strong>` : `${part}`).join(' ')} <span>${team}</span>`)
  .style('border-left', ({team}) => {
    const color = team.split(' ').map((word, index) => index > 0 ? `${word[0].toUpperCase()}${word.slice(1)}` : `${word}` ).join('');
    return `4px solid ${colors[color]}`;
  })
  .attr('class', 'driver');

drivers
  .append('td')
  .attr('class', 'point')
  .append('span')
  .text(({point}) => point); 
