const inputBox = document.querySelector('.inputBox');
const datePicker = document.querySelector('.datePicker');
let arrayList = [];

// Renders the array to the HTML (webpage)
function renderArray(){
  let todoDisplay = '';     // initializes accumulator

  for (let i = 0; i < arrayList.length; i++){
    todoObj = arrayList[i];           // each element or object is saved
    let { name, date } = todoObj;     // object destructuring

    // creates HTML elements
    let todoHTML = `
      <p>
        ${name} ${date}
        <button onclick="
          arrayList.splice(${i}, 1);
          renderArray();
        ">Delete</button>
      </p>
    `;

    todoDisplay += todoHTML;              // HTML lines are accumulated to a variable
  }
  document.querySelector('.todoContainer').innerHTML = todoDisplay; // after all array object has been saved, it is rendered to the webpage
}

// Input function
function addToArray(){
  const todoObj = {           // initializes object property
    name: inputBox.value,
    date: datePicker.value
  };

  arrayList.push(todoObj);    // todoObj input is pushed to the arrayList

  inputBox.value = '';        // clears input
  datePicker.value = '';

  renderArray();              // input is loaded to the webpage
}