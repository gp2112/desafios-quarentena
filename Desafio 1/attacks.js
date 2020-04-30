/*
   ////////////////////////////////////////
  //Sets attacks of player and opponent //
 ////////////////////////////////////////

*/

const playerAttacks = {
  flashCannon: {
    power: 80,
    accuracy: 95,
    name: 'Flash Cannon',
    sound: 'Flash.mp3',
    type: 'steel',
    especial: function (opponent) { // 50% probability to get paralised
          if (parseInt(Math.random()*10)%2) {
            opponent.isParalised=true;
          }
        }
  },
  metalClaw: {
    power: 50,
    accuracy: 95,
    name: 'Metal Claw',
    type: 'steel',
    sound: 'metalclaw.mp3'
  },
  slash: {
    power: 70,
    accuracy: 100,
    name: 'slash',
    type: 'normal',
    sound: 'Slash.mp3'
  },
  ironTail: {
    power: 100,
    accuracy: 75,
    name: 'Iron Tail',
    type: 'steel',
    sound: 'irontail.mp3'
  }
}

const opponentAttacks = {
  auraSphere: {
    power: 80,
    accuracy: 90,
    name: 'Aura Sphere',
    type: 'fighting',
    sound: 'aurasphere.mp3'
  },
  shadowClaw: {
    power: 70,
    accuracy: 97,
    name: 'Shadow Claw',
    type: 'ghost',
    sound: 'shadowclaw.mp3'
  },
  hex: {
    power: 65,
    accuracy: 100,
    name: 'hex',
    type: 'ghost',
    sound: 'Ancientpower.mp3'
  },
  ancientPower: {
    power: 60,
    accuracy: 99,
    name: 'Ancient Power',
    type: 'rock',
    sound: 'Ancientpower.mp3'
  }
}
let player = new Player('player', 900, 'steel', 'player-health', playerAttacks, 'dialga');
let opponent = new Player('opponent', 900, 'ghost', 'opponent-health', opponentAttacks, 'giratina');
