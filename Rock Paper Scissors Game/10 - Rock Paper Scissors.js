// GLOBAL VARIABLES to be used in multiple functions
const displayUserChoice = document.querySelector('.displayUserChoice');
const displayComputerChoice = document.querySelector('.displayComputerChoice');
const displayResult = document.querySelector('.displayResult');
const displayScore = document.querySelector ('.displayScore');
const score = JSON.parse(localStorage.getItem('score')) || { win: 0, lose: 0, tie: 0 };

// Display score values
displayScore.innerHTML = `Win: ${score.win} | Lose: ${score.lose} | Tie: ${score.tie}`;

// Run functions on clicking icons and reset button
document.querySelector('.rockCont').addEventListener('click', () => play('rock'));
document.querySelector('.paperCont').addEventListener('click', () => play('paper'));
document.querySelector('.scissorsCont').addEventListener('click', () => play('scissors'));
document.querySelector('.displayResetScore').addEventListener('click', resetScore);

// Play function
function play(userChoice){  
  let random = Math.random();
  let computerChoice = '';

  // Computer choice identifier based on random value
  if (random < 0.33){
    computerChoice = 'rock';
  } else if (random < 0.66){
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }

  // Evaluate result of user vs computer choice
  if (
      userChoice === 'rock' && computerChoice === 'rock' ||
      userChoice === 'paper' && computerChoice === 'paper' ||
      userChoice === 'scissors' && computerChoice === 'scissors' 
  ){
    score.tie++;
    displayResult.innerHTML = `Tie!`;
    displayResult.style.color = "rgb(174, 164, 86)";
  } else if (
      userChoice === 'rock' && computerChoice === 'scissors' ||
      userChoice === 'paper' && computerChoice === 'rock' ||
      userChoice === 'scissors' && computerChoice === 'paper' 
  ){
    score.win++;
    displayResult.innerHTML = `You win!`;
    displayResult.style.color = "rgb(69, 156, 61)";
  } else {
    score.lose++;
    displayResult.innerHTML = `You lose!`;
    displayResult.style.color = "rgb(161, 65, 65)";
  }

  // Display input and output and save the result
  displayUserChoice.innerHTML = `You picked ${userChoice}`;
  displayComputerChoice.innerHTML = `Computer picked ${computerChoice}`
  displayScore.innerHTML = `Win: ${score.win} | Lose: ${score.lose} | Tie: ${score.tie}`;

  // Save the updated score
  localStorage.setItem('score', JSON.stringify(score));
}

// Reset score function
function resetScore(){
  score.win = 0;
  score.lose = 0;
  score.tie = 0;

  // Save the resetted score to the local storage
  localStorage.setItem('score', JSON.stringify(score));

  // Remove last user-computer's input-output display
  displayUserChoice.innerHTML = '';
  displayComputerChoice.innerHTML = '';
  displayResult.innerHTML = '';

  // Update the score display
  displayScore.innerHTML = `Win: ${score.win} | Lose: ${score.lose} | Tie: ${score.tie}`;
}