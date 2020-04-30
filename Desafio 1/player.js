class Player {

  constructor(name, totalHp, type, elementId, attacks, pokemon) {
    this._id = elementId;
    this._name = name;
    this._totalHp = totalHp;
    this._type = type;
    this.isParalised = false;
    this.paralisedRounds = 0;
    this.hp = totalHp;
    this._attacks = attacks;
    this._pokemon = pokemon;
  }

  // Getters:
  get name() {return this._name}
  get totalHp() {return this._totalHp}
  get type() {return this._type}
  get hpElement() {return document.getElementById(this._id)}
  get attacks() {return this._attacks}
  get pokemon() {return this._pokemon}
  //////////////////////////////

  updateHp(newHp) {
    // Prevents the HP to go lower than 0
    this.hp = Math.max(newHp, 0);

    // If player health is equal 0 opponent wins
    if (this.hp === 0) {
      gameOver(this);
    }

    // Update the player hp bar
    const barWidth = (this.hp / this.totalHp) * 100;
    this.hpElement.style.width = barWidth + '%';
  }

  attack(attack, player2, iscritical) {
    if (willAttackMiss(attack.accuracy)) {
      return false;
    }

    let dammage = iscritical ? critical*attack.power : attack.power;

    if (attack.type == weakness[opponent.type]) {
      dammage = dammage/weaknessPenalty; 
    } else {
      player2.updateHp(player2.hp - dammage);
    }

    if (attack.especial != null) {
      attack.especial(player2);
    }
    let sound = new Audio('assets/sounds/'+attack.sound);
    sound.play();
    flash(player2);

    return true;
  }


}