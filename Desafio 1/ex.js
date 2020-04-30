const turnText = document.getElementById('text');
let isTurnHappening = false;


function chooseOpponentAttack () {
  // Put all opponents attacks in a array
  const possibleAttacks = Object.values(opponentAttacks);

  // Randomly chooses one attack from the array
  return possibleAttacks[Math.floor(Math.random() * possibleAttacks.length)];
}

function turn(playerChosenAttack) {
  // Don't start another turn till the current one is not finished
  if (isTurnHappening) {
    return;
  }
  isTurnHappening = true;

  const didPlayerHit = player.attack(playerChosenAttack, opponent);

  // Update HTML text with the used attack
  turnText.innerText = 'Player used ' + playerChosenAttack.name;

  // Update HTML text in case the attack misses
  if (!didPlayerHit) {
    turnText.innerText += ', but missed!';
  }

  // Wait 2000ms to execute opponent attack (Player attack animation time)
  setTimeout(() => {
    if (opponent.isParalised) {
      turnText.innerText = 'Opponent is paralised!';
      if (opponent.paralisedRounds == 1) {
        opponent.paralisedRounds = 0;
        opponent.isParalised = false;
      } else {
        opponent.paralisedRounds = 1;
      }
    } else {
        // Randomly chooses opponents attack
      const opponentChosenAttack = chooseOpponentAttack();

      const didOpponentHit = opponent.attack(opponentChosenAttack, player);

      // Update HTML text with the used attack
      turnText.innerText = 'Opponent used ' + opponentChosenAttack.name;

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
document.getElementById('thunder-shock-button').addEventListener('click', function() {
  turn(player.attacks.thunderShock);
});
document.getElementById('quick-attack-button').addEventListener('click', function() {
  turn(player.attacks.quickAttack);
});
document.getElementById('thunder-button').addEventListener('click', function() {
  turn(player.attacks.thunder);
});
document.getElementById('submission-button').addEventListener('click', function() {
  turn(player.attacks.submission);
});
