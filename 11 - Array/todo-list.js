const inputBox = document.querySelector('.inputBox');
const datePicker = document.querySelector('.datePicker');
let arrayList = [];

// Renders the array to the HTML (webpage)
function renderArray(){
  let todoDisplay = '';     // accumulator
  for (let i = 0; i < arrayList.length; i++){
    let todoObj = arrayList[i];           // each element or object is saved
    let { name, date } = todoObj;         // object destructuring
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

function addToArray(){
  arrayList.push({            // input goes to the array
    name: inputBox.value,     // with object structure
    date: datePicker.value
  });
  inputBox.value = '';    // clears the input box
  datePicker.value = '';
  renderArray();          // new array (list) is loaded to the webpage
}