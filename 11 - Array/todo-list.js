const inputBox = document.querySelector('.inputBox');
let arrayList = [];

// Renders the array to the HTML (webpage)
function renderArray(){
  let todoDisplay = '';     // accumulator
  for (let i = 0; i < arrayList.length; i++){
    let todoVar = arrayList[i];           // each element is saved
    let todoHTML = `<p>${todoVar}</p>`;   // and makes its own HTML line
    todoDisplay += todoHTML;              // and HTML lines are accumulated
  }
  document.querySelector('.todoContainer').innerHTML = todoDisplay; // after accumulation, it is rendered to the webpage
}

function addToArray(){
  arrayList.push(inputBox.value);   // input goes to the array
  // for loop for verification
  for (let i = 0; i < arrayList.length; i++){
    console.log(arrayList[i]);
  }
  inputBox.value = '';    // clears the input box
  renderArray();    // new array (list) is loaded to the webpage
}