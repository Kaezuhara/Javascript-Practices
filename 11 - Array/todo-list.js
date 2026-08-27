const inputBox = document.querySelector('.inputBox');
let arrayList = [];

function addToArray(){
  arrayList.push(inputBox.value)
  for (let i = 0; i < arrayList.length; i++){
    console.log(arrayList[i]);
  }
  inputBox.value = '';
}