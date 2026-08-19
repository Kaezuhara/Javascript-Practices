const scoreDisp = document.querySelector('.scoreDisp');
const status = document.querySelector('.status');

const score = {
  correct: 0,
  wrong: 0
};

let coin = '';
let hasFlipped = false;

function toss(){
  const random = Math.random();

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
    scoreDisp.innerHTML = `Win: ${score.correct}     Lose: ${score.wrong}`;
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
    scoreDisp.innerHTML = `Win: ${score.correct}     Lose: ${score.wrong}`;
  }
};