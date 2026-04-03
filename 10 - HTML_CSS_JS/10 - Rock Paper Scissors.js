function play(userChoice){
  displayUserChoice = document.querySelector('.displayUserChoice');
  displayComputerChoice = document.querySelector('.displayComputerChoice');
  displayResult = document.querySelector('.displayResult');
  
  let random = Math.random();
  let computerChoice = '';
  let result = '';

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
    displayResult.innerHTML = `Tie!`;
  } else if (
      userChoice === 'rock' && computerChoice === 'scissors' ||
      userChoice === 'paper' && computerChoice === 'rock' ||
      userChoice === 'scissors' && computerChoice === 'paper' 
  ){
    result = 'win'
    displayResult.innerHTML = `You win!`;
  } else {
    result = 'lose'
    displayResult.innerHTML = `You lose!`;
  }
}