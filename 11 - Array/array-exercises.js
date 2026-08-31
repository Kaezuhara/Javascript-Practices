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



// Exercise #7: Check and find if a word appears in an array
function findWord(arr, find){
  console.log("Exercise #7: Check and find if a word appears in an array");
  console.log(`Array contains: ${arr}`);

  for (let i = 0; i < arr.length; i++){
    if (find === arr[i]){
      console.log(`The word ${find} is found. It's index is ${i}`);
      break;
    } else if (!arr.includes(find)){
      console.log(`The word ${find} is not in the array.`);
    }
  }
  console.log("--------------------------");
}



// Exercise #8: Remove the first 2 eggs from the array
function removeFirstTwo(arr){
  console.log("Exercise #8: Remove the first 2 eggs from the array");
  console.log(`Array contains: ${arr}`);
  

  let eggCount = 0;
  let result = [];

  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 'egg' && eggCount != 2){
      eggCount++;
      continue;
    }
    result.push(arr[i]);
  }
  console.log(result);
  console.log("--------------------------");
}



// Example #9: Reverse the last 2 'eggs'
function removeLastTwo(arr){
  console.log("Exercise #9: Reverse the last 2 'eggs'");
  console.log(`Array contains: ${arr}`);

  let eggsRemoved = 0;
  let result = [];

  let arrCopy = arr.slice();    // create a copy of the array before reversing. otherwise, the original arr gets reversed too.
  let reversedArr = arrCopy.reverse();    // reverse the array to count starting from the last element

  for (let i = 0; i < reversedArr.length; i++){
    if (reversedArr[i] === 'egg' && eggsRemoved != 2){
      eggsRemoved++;
      continue;
    }
    result.push(reversedArr[i]);
  }

  result.reverse();   // reverse it back

  console.log(result);
  console.log("--------------------------");
}