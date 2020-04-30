/*
   ////////////////////////////////////////
  //Sets attacks of player and opponent //
 ////////////////////////////////////////

*/

const playerAttacks = {
  thunderShock: {
    power: 40,
    accuracy: 100,
    name: 'Thunder Shock',
    type: 'electric',
    especial: function (opponent) {opponent.isParalised=true}
  },
  quickAttack: {
    power: 40,
    accuracy: 100,
    name: 'Quick Attack',
    type: 'normal',
  },
  thunder: {
    power: 110,
    accuracy: 70,
    name: 'Thunder',
    type: 'electric',
  },
  submission: {
    power: 80,
    accuracy: 80,
    name: 'Submission',
    type: 'fighting',
  }
}

const opponentAttacks = {
  tackle: {
    power: 40,
    accuracy: 100,
    name: 'Tackle',
    type: 'normal',
  },
  bubble: {
    power: 40,
    accuracy: 100,
    name: 'Bubble',
    type: 'water',
  },
  waterGun: {
    power: 40,
    accuracy: 100,
    name: 'Water Gun',
    type: 'water',
  },
  hydroPump: {
    power: 110,
    accuracy: 80,
    name: 'Hydro Pump',
    type: 'water',
  }
}
let player = new Player('player', 274, 'electric', 'player-health', playerAttacks);
let opponent = new Player('opponent', 292, 'water', 'opponent-health', opponentAttacks);
