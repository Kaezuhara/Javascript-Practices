const inputBox = document.querySelector('.inputBox');
const datePicker = document.querySelector('.datePicker');
document.querySelector('.addButton').addEventListener('click', addToArray);
let arrayList = JSON.parse(localStorage.getItem('arrayList')) || [
  // SAMPLE TO-DO
  {
    name: "Graduate",
    date: "2028-9-23"
  }, {
    name: "Buy my own PC",
    date: "2029-5-15"
  }, {
    name: "Get married with my current girlfriend",
    date: "2034-12-11"
  }
];

renderArray();    // Renders the sample array

// Renders the array to the HTML (webpage)
function renderArray(){
  let todoDisplay = '';     // initializes accumulator

  for (let i = 0; i < arrayList.length; i++){
    todoObj = arrayList[i];           // each element or object is saved
    let { name, date } = todoObj;     // object destructuring

    // creates HTML elements
    let todoHTML = `
      <div>${name}</div>
      <div>${date}</div>
      <button class="deleteButton"
      ">Delete</button>
    `;

    todoDisplay += todoHTML;              // HTML lines are accumulated to a variable
  }
  document.querySelector('.todoContainer').innerHTML = todoDisplay; // after all array object has been saved, it is rendered to the webpage

  // On click event listener for Delete Buttons
  document.querySelectorAll('.deleteButton')            // select every element with deleteButton class
    .forEach((deleteButton, index) => {                 // each deleteButton element has its own index...
      deleteButton.addEventListener('click', () => {    // and runs a function when clicked.
        arrayList.splice(index, 1);                     // removes the element with that index
        renderArray();                                  // renders the updated array
      })
    })

  localStorage.setItem('arrayList', JSON.stringify(arrayList)); // saved to local storage
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