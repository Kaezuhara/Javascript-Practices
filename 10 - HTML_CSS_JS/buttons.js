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
const lowerButtons = document.querySelectorAll('.lowerButtons');

// each button gets a click event listener. and when a button is clicked, the function runs on that button.
lowerButtons.forEach(btn => btn.addEventListener('click', () => {     
  if (btn.classList.contains('is-toggle')){                           // that click button is checked if it has 'is-toggle' class.
    btn.classList.remove('is-toggle');                                // if it does, then it removes the 'is-toggle' class.
  } else {                                                            // otherwise...
    lowerButtons.forEach(btn => btn.classList.remove('is-toggle'));   // it loops to all buttons to remove 'is-toggle' class...
    btn.classList.add('is-toggle');                                   // then adds 'is-toggle' to the current button which is clicked.
  }
}));