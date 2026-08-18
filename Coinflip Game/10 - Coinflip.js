const scoreDisp = document.querySelector('.scoreDisp');

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
}

function guessHeads(){

  let guess = 'heads';
  
  if (guess === coin){
    console.log("You guessed it right!");
    score.correct++;
  } else {
    console.log("You guessed it wrong!");
    score.wrong++;
  }

  scoreDisp.innerHTML = `Win: ${score.correct}     Lose: ${score.wrong}`;
};

function guessTails(){

  let guess = 'tails';
  
  if (guess === coin){
    console.log("You guessed it right!");
    score.correct++;
  } else {
    console.log("You guessed it wrong!");
    score.wrong++;
  }

  scoreDisp.innerHTML = `Win: ${score.correct}     Lose: ${score.wrong}`;
};