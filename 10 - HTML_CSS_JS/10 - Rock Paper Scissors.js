function play(userChoice){
  displayUserChoice = document.querySelector('.displayUserChoice');
  displayComputerChoice = document.querySelector('.displayComputerChoice');
  displayResult = document.querySelector('.displayResult');
  displayScore = document.querySelector ('.displayScore');
  
  let random = Math.random();
  let computerChoice = '';
  let result = '';
  const score = JSON.parse(localStorage.getItem('score')) ||
    {
      win: 0,
      lose: 0,
      tie: 0
    };

  displayUserChoice.innerHTML = `You chose ${userChoice}`;

  if (random < 0.33){
    computerChoice = 'rock';
  } else if (random > 0.33 && random < 0.66){
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }

  displayComputerChoice.innerHTML = `Computer chose ${computerChoice}`

  if (
      userChoice === 'rock' && computerChoice === 'rock' ||
      userChoice === 'paper' && computerChoice === 'paper' ||
      userChoice === 'scissors' && computerChoice === 'scissors' 
  ){
    result = 'tie'
    score.tie++;
    displayResult.innerHTML = `Tie!`;
  } else if (
      userChoice === 'rock' && computerChoice === 'scissors' ||
      userChoice === 'paper' && computerChoice === 'rock' ||
      userChoice === 'scissors' && computerChoice === 'paper' 
  ){
    result = 'win'
    score.win++;
    displayResult.innerHTML = `You win!`;
  } else {
    result = 'lose'
    score.lose++;
    displayResult.innerHTML = `You lose!`;
  }

  displayScore.innerHTML = `Win: ${score.win} | Lose: ${score.lose} | Win: ${score.tie}`;
  localStorage.setItem('score', JSON.stringify(score));
}