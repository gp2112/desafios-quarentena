class Player {

  constructor(name, totalHp, type, elementId, attacks) {
    this._id = elementId;
    this._name = name;
    this._totalHp = totalHp;
    this._type = type;
    this.isParalised = false;
    this.paralisedRounds = 0;
    this.hp = totalHp;
    this._attacks = attacks;
  }

  // Getters:
  get name() {return this._name}
  get totalHp() {return this._totalHp}
  get type() {return this._type}
  get hpElement() {return document.getElementById(this._id)}
  get attacks() {return this._attacks}
  //////////////////////////////

  updateHp(newHp) {
    // Prevents the HP to go lower than 0
    this.hp = Math.max(newHp, 0);

    // If player health is equal 0 opponent wins
    if (this.hp === 0) {
      gameOver('Opponent');
    }

    // Update the player hp bar
    const barWidth = (this.hp / this.totalHp) * 100;
    this.hpElement.style.width = barWidth + '%';
  }

  attack(attack, player2) {
    if (willAttackMiss(attack.accuracy)) {
      return false;
    }
    if (attack.type == weakness[opponent.type]) {
      player2.updateHp(player2.hp - attack.power*weaknessPenalty); 
    } else {
      player2.updateHp(player2.hp - attack.power);
    }

    if (attack.especial != null) {
      attack.especial(player2);
    }

    return true;
  }


}