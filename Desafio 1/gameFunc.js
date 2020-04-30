function gameOver (looser) {
  // Wait 1000 (Health loss animation)
  const winner = looser.name=='opponent' ? 'player' : 'opponent';
  setTimeout(() => {
    // Update HTML text with the winner
    document.getElementById(looser.pokemon+'img').style.visibility = 'hidden';
    document.getElementById('music').pause();
    if (winner == 'player') {
    	let musica = new Audio('assets/sounds/victory.mp3');
    	musica.play();
    }
    turnText.innerText = winner + ' is the winner!';
    // Open alert with the winner
    alert(winner + ' is the winner! Close this alert to play again');
    // Reload the game
    window.location.reload();
  }, 1000);
}

const weakness = {
  'steel':'fighting',
}

const weaknessPenalty = 0.85; //rate between 0 and 1
const critical = 2;
const critialProbability = 25; // 5%

// Check if attacks misses
function willAttackMiss (accuracy) {
  return Math.floor(Math.random() * 100) > accuracy;
}

function isCritical() {
	return Math.floor(Math.random()*100) < critialProbability;
}

//Flash effect when the pokemon is hitted
function flash(player) {
	let pokemon = document.getElementById(player.pokemon+'img');
	pokemon.style.visibility = 'hidden';
	setTimeout(function() {
		pokemon.style.visibility = 'visible';
	}, 180);
}