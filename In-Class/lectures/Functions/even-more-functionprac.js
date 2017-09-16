//write a fun that accepts 2 argumnets with a num & string &
//return the string repated same times as the number

/*function repeatString(string, num) {
let newString="";
  for(let i= 0; i < num; i++) {
    newString += string;
  }
   return newString;
}


string= string.repeat(num);
return string;
}
console.log(repeatString("hello world", 5));
console.log(repeatString("foo", 3));
*/

//write a function that takes a positive 3 digit int & rearranges to get the maximum
//possible number. DOn't assume it's positive or 3 digits, not valid return null
/*
function maxRedigit(num) {
let numString= num.toString();
numString= numString.split('');


  if(num < 100 || num > 999) {
    return null;
  }

let maxIndex = 0;
let minIndex = 0;
let midIndex = 0;

    for(let i= 0; i < numString.length; i++) {
        if(numString[i] > numString[maxIndex]) {
          maxIndex = i
        } else if (numString[i] < numString[minIndex]) {
          minIndex= i
        }
      }

        if(maxIndex === 0 && minIndex === 1){
          midIndex = 2;
        } else if (maxIndex === 1 && minIndex === 0) {
          midIndex= 2;
        } else if (maxIndex === 2 && minIndex === 1) {
          midIndex= 0;
        } else if (maxIndex === 2 && minIndex=== 0) {
          midIndex= 1;
        } else if (maxIndex===0 && minIndex===2) {
          midIndex= 1;
        } else if (maxIndex === minIndex) {
          midIndex= 1
          minIndex= 2
        }

answerArray = [];
answerArray[0]= numString[maxIndex];
answerArray[1]= numString[midIndex];
answerArray[2]= numString[minIndex];


  let answerString= answerArray.join('');
  return answerString;
}


console.log(maxRedigit(123));
console.log(maxRedigit(297));
console.log(maxRedigit(368));
console.log(maxRedigit(531));
console.log(maxRedigit(636));
console.log(maxRedigit(555));
console.log(maxRedigit(32));
*/

//Built in function way
/*
function maxRedigit(num) {
  if(num < 100 || num > 999) {
    return null;
  }

let numString= num.toString();
let numArray= numString.split('');

numArray.sort().reverse();

let answerString= numArray.join('');

return parseInt(answerString, 10);
}

    console.log(maxRedigit(123));
    console.log(maxRedigit(297));
    console.log(maxRedigit(368));
    console.log(maxRedigit(531));
    console.log(maxRedigit(636));
    console.log(maxRedigit(555));
    console.log(maxRedigit(32));
*/

//write a fn that accepts an array of integers and a target. if any two consecutive
// numbers in the array add up to the target, remove the 2nd number. return altered array

function removeTargetSum (array, target) {

  for (let i=0; i < array.length; i++) {
    if (array[i] + array[i+1] === target) {
    array.splice(i+1, 1);
    i--;
  }

  }


return array;
}

console.log(removeTargetSum([1, 3, 5, 6, 7, 4, 3], 7));
console.log(removeTargetSum([4, 1, 1, 1, 4], 2));
console.log(removeTargetSum([2, 2, 2, 2, 2, 2], 4));
console.log(removeTargetSum([1, 5, 3, 7], 8));
