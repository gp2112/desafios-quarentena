const turnText = document.getElementById('text');
let isTurnHappening = false;


function chooseOpponentAttack () {
  // Put all opponents attacks in a array
  const possibleAttacks = Object.values(opponent.attacks);

  // Randomly chooses one attack from the array
  return possibleAttacks[Math.floor(Math.random() * possibleAttacks.length)];
}

function turn(playerChosenAttack) {
  // Don't start another turn till the current one is not finished
  if (isTurnHappening) {
    return;
  }
  isTurnHappening = true;
  let iscritical = isCritical();
  let criticaltxt = iscritical ? ' and was CRITICAL!' : ' ';
  const didPlayerHit = player.attack(playerChosenAttack, opponent, iscritical);

  // Update HTML text with the used attack
  turnText.innerText = 'Player used ' + playerChosenAttack.name + criticaltxt;

  // Update HTML text in case the attack misses
  if (!didPlayerHit) {
    turnText.innerText += ', but missed!';
  }

  // Wait 2000ms to execute opponent attack (Player attack animation time)
  setTimeout(() => {
    if (opponent.isParalised) {
      turnText.innerText = 'Opponent is paralyzed!';
      if (opponent.paralisedRounds == 1) {
        opponent.paralisedRounds = 0;
        opponent.isParalised = false;
      } else {
        opponent.paralisedRounds = 1;
      }
    } else {
        // Randomly chooses opponents attack
      let iscritical = isCritical();
      const opponentChosenAttack = chooseOpponentAttack();
      const didOpponentHit = opponent.attack(opponentChosenAttack, player, iscritical);
      let criticaltxt = iscritical ? ' and was CRITICAL!' : ' ';
      console.log(iscritical);
      // Update HTML text with the used attack
      turnText.innerText = 'Opponent used ' + opponentChosenAttack.name + criticaltxt;

      // Update HTML text in case the attack misses
      if (!didOpponentHit) {
        turnText.innerText += ', but missed!';
      }
    }

    // Wait 2000ms to end the turn (Opponent attack animation time)
    setTimeout(() => {
      // Update HTML text for the next turn
      turnText.innerText = 'Please choose one attack';
      isTurnHappening = false;
    }, 2000);
  }, 2000);
}

// Set buttons click interaction
document.getElementById('flashcannon-button').addEventListener('click', function() {
  turn(player.attacks.flashCannon);
});
document.getElementById('metalclaw-button').addEventListener('click', function() {
  turn(player.attacks.metalClaw);
});
document.getElementById('slash-button').addEventListener('click', function() {
  turn(player.attacks.slash);
});
document.getElementById('irontail-button').addEventListener('click', function() {
  turn(player.attacks.ironTail);
});

// start music
window.addEventListener('load', function() {
  let music = document.getElementById('music');
  music.play();
  music.volume = 0.6;
});