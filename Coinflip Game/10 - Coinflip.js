// HTML to JavaScript
const scoreDisp = document.querySelector('.scoreDisp');
const statusFeedback = document.querySelector('.statusFeedback');
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
    statusFeedback.innerHTML = 'Coin has been tossed already. Select your guess!'
  } else {
    if (random < 0.5){
      coin = 'heads';
    } else {
      coin = 'tails';
    }
    hasFlipped = true;
    statusFeedback.innerHTML = 'Coin has been tossed. Select your guess!';
  }
}

function playGame(guess){
  
  if (!hasFlipped){
    statusFeedback.innerHTML = 'Please toss the coin first.';
  } else {
    if (guess === coin){
      statusFeedback.innerHTML = `You guessed ${guess}. Correct!`;
      score.correct++;
    } else {
      statusFeedback.innerHTML = `You guessed ${guess}. Wrong!`;
      score.wrong++;
    }
    hasFlipped = false;
    scoreDisp.innerHTML = `Win: ${score.correct} | Lose: ${score.wrong}`;
    localStorage.setItem('score', JSON.stringify(score));
  }
};

function resetScore(){
  score.correct = 0;
  score.wrong = 0;
  scoreDisp.innerHTML = `Win: ${score.correct} | Lose: ${score.wrong}`;
  localStorage.removeItem('score');

  hasFlipped = false;
  statusFeedback.innerHTML = 'Score has been reset. Toss the coin to start.';
}