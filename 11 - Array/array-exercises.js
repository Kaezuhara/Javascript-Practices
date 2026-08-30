// Exercise #1: Get the last value of the array
function getLastValue(arr){
  console.log("Exercise #1: Get the last value of the array")
  console.log(`Array contains: ${arr}`);

  let lastValue = arr[arr.length - 1];
  console.log(`Last value: ${lastValue}`);
  console.log("--------------------------");
}



// Exercise #2: Swap the first and last value of the array.
function swapFirstLast(arr){
  console.log("Exercise #2: Swap the first and last value of the array.");
  console.log(`Array contains: ${arr}`);

  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = arr[0];
  console.log(`After swapping: ${arr}`);
  console.log("--------------------------");
}



// Exercise #3: For loop that counts up to 0 to 10, but by 2.
function countByTwo(){
  console.log("Exercise #3: For loop that counts up to 0 to 10, but by 2.");
  for (let i = 0; i < 10; i++){
    if (i % 2 === 0){
      console.log(i);
    }
  }
  console.log("--------------------------");
}



// Exercise #4: Add 1 to integers of the array
function addOne(arr){
  console.log("Exercise #4: Add 1 to integers of the array");
  console.log(`Array contains: ${arr}`)
  for (let i = 0; i < arr.length; i++){
    arr[i] += 1;
  }
  console.log(`Result: ${arr}`)
  console.log("--------------------------");
}



// Exercise #5: Takes an array of numbers and make an object of min and max
function minMax(arr){
  console.log("Exercise #5: Takes an array of numbers and make an object of min and max");
  console.log(`Array contains: ${arr}`);

  let objMinMax = {
    min: Math.min(...arr),  // spread operator to get all elements of the array
    max: Math.max(...arr)
  };

  console.log(`Min value: ${objMinMax.min}`);
  console.log(`Max value: ${objMinMax.max}`);
  console.log("--------------------------");
}



// Exercise #6: Check how many times each word appeared in an array
function wordFrequency(arr){
  console.log("Exercise #6: Check how many times each word appeared in an array");
  console.log(`Array contains: ${arr}`);

  let result = {};  // initialize object

  for (let i = 0; i < arr.length; i++){
    word = arr[i];
    if (!result[word]){      // if the word is not yet a property of the result object, add it as a property by making it have value (ex. apple = 1).
      result[word] = 1;
    } else {
      result[word]++;        // else, if the word already exists as a property, add 1 to its value.
    }
  }
  console.log(result);
  console.log("--------------------------");
}