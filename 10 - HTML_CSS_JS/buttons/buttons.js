// Upper Buttons

upperButton1 = document.querySelector('.upperButton1');
document.querySelector('.upperButton1').addEventListener('click', toggleButton1);

function toggleButton1(){
  if (upperButton1.classList.contains('is-toggle')){
    upperButton1.classList.remove('is-toggle');
  } else {
    upperButton1.classList.add('is-toggle');
  }
}

upperButton2 = document.querySelector('.upperButton2');
document.querySelector('.upperButton2').addEventListener('click', toggleButton2);

function toggleButton2(){
  if (upperButton2.classList.contains('is-toggle')){
    upperButton2.classList.remove('is-toggle');
  } else {
    upperButton2.classList.add('is-toggle');
  }
}

upperButton3 = document.querySelector('.upperButton3');
document.querySelector('.upperButton3').addEventListener('click', toggleButton3);

function toggleButton3(){
  if (upperButton3.classList.contains('is-toggle')){
    upperButton3.classList.remove('is-toggle');
  } else {
    upperButton3.classList.add('is-toggle');
  }
}

upperButton4 = document.querySelector('.upperButton4');
document.querySelector('.upperButton4').addEventListener('click', toggleButton4);

function toggleButton4(){
  if (upperButton4.classList.contains('is-toggle')){
    upperButton4.classList.remove('is-toggle');
  } else {
    upperButton4.classList.add('is-toggle');
  }
}

// Lower Buttons
const lowerButtons = document.querySelector('.lowerButtons');

const lowerButton1 = document.querySelector('.lowerButton1');
document.querySelector('.lowerButton1').addEventListener('click', toggleLowerButton1);

function toggleLowerButton1(){
  if (lowerButton1.classList.contains('is-toggle')){
    lowerButton1.classList.remove('is-toggle') ;
  } else {
    lowerButtons.classList.remove('is-toggle');
    lowerButton1.classList.add('is-toggle');
  }
}

const lowerButton2 = document.querySelector('.lowerButton2');
document.querySelector('.lowerButton2').addEventListener('click', toggleLowerButton2);

function toggleLowerButton2(){
  if (lowerButton2.classList.contains('is-toggle')){
    lowerButton2.classList.remove('is-toggle');
  } else {
    lowerButtons.classList.remove('is-toggle');
    lowerButton2.classList.add('is-toggle');
  }
}

// TO ADD

// click button
// add toggle to that button
// click NEW button
// check all buttons
// remove toggle
// add toggle to that button