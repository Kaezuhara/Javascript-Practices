// HTML to JavaScript
const scoreDisp = document.querySelector('.scoreDisp');
const status = document.querySelector('.status');
const reset = document.querySelector('.reset');

// Global variable initialization
let coin = '';
let hasFlipped = false;

// Initializes score   |   Gets the score saved in the local storage first.
// Otherwise, initialize the score and set to 0.
let score = JSON.parse(localStorage.getItem('score')) || {
  correct: 0,
  wrong: 0
};

// When the page loads, display the score.
scoreDisp.innerHTML = `Win: ${score.correct} | Lose: ${score.wrong}`;

// Toss function when clicking the toss button.
function toss(){
  const random = Math.random();   // Randomizer

  if (hasFlipped){
    status.innerHTML = 'Coin has been tossed already. Select your guess!'
  } else {
    if (random < 0.5){
      coin = 'heads';
    } else {
      coin = 'tails';
    }
    hasFlipped = true;
    status.innerHTML = 'Coin has been tossed. Select your guess!';
  }
}

function guessHeads(){

  let guess = 'heads';
 
  if (!hasFlipped){
    status.innerHTML = 'Please toss the coin first.';
  } else {
    if (guess === coin){
      status.innerHTML = 'You guessed heads. Correct!';
      score.correct++;
    } else {
      status.innerHTML = 'You guessed heads. Wrong!';
      score.wrong++;
    }
    hasFlipped = false;
    scoreDisp.innerHTML = `Win: ${score.correct} | Lose: ${score.wrong}`;
    localStorage.setItem('score', JSON.stringify(score));
  }
};

function guessTails(){

  let guess = 'tails';
  
  if (!hasFlipped){
    status.innerHTML = 'Please toss the coin first.';
  } else {
    if (guess === coin){
      status.innerHTML = 'You guessed tails. Correct!';
      score.correct++;
    } else {
      status.innerHTML = 'You guessed tails. Wrong!';
      score.wrong++;
    }
    hasFlipped = false;
    scoreDisp.innerHTML = `Win: ${score.correct} | Lose: ${score.wrong}`;
    localStorage.setItem('score', JSON.stringify(score));
  }
};

function resetScore(){
  score.correct = 0,
  score.wrong = 0
  scoreDisp.innerHTML = `Win: ${score.correct} | Lose: ${score.wrong}`;
  localStorage.removeItem('score');

  hasFlipped = false;
  status.innerHTML = 'Score has been reset. Toss the coin to start.';
}