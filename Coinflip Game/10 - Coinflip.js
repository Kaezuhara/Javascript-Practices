const scoreDisp = document.querySelector('.scoreDisp');
const status = document.querySelector('.status');

const score = {
  correct: 0,
  wrong: 0
};

let coin = '';

function toss(){
  const random = Math.random();

  if (random < 0.5){
    coin = 'heads';
  } else {
    coin = 'tails';
  }

  status.innerHTML = 'Select your guess!';
}

function guessHeads(){

  let guess = 'heads';
  
  if (guess === coin){
    status.innerHTML = 'You guessed heads. Correct!';
    score.correct++;
  } else {
    status.innerHTML = 'You guessed heads. Wrong!';
    score.wrong++;
  }

  scoreDisp.innerHTML = `Win: ${score.correct}     Lose: ${score.wrong}`;
};

function guessTails(){

  let guess = 'tails';
  
  if (guess === coin){
    status.innerHTML = 'You guessed tails. Correct!';
    score.correct++;
  } else {
    status.innerHTML = 'You guessed tails. Wrong!';
    score.wrong++;
  }

  scoreDisp.innerHTML = `Win: ${score.correct}     Lose: ${score.wrong}`;
};