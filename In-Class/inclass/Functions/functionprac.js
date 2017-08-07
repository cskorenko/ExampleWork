function greeting (message) {
  console.log(message);
}

greeting('hello world');

//create a function that takes an array as an argument & logs each value of that array to the console

function luckyNumbers () {
  for (let i = 0; i < myArr.length; i++)
  console.log(myArr[i]);
}

let myArr = [6, 8, 23, 24, 56];

luckyNumbers(myArr)

const array = [4, 5, 6];

function numbers (array) {
  console.log(array);
}

numbers(array);

//create a function that prints out true if the argument provided is a number or print out false otherwise
function classProblem (number) {
  if (typeof(number) === 'number') {
    console.log(true);
  } else {
    console.log(false);
  }
  return number;
}

// the return value will be assigned to the var myNum
let myNum = classProblem(5);

console.log(myNum)


/*create a new function that takes an array as an argument & loops through and multiples each number in the array by 5
then returns a new array containting the new values*/

const startingArray = [3, 5, 7];

function number (startingArray) {
  let newArray = [];
    for ( let i = 0; i < startingArray.length; i++) {
      newArray.push(startingArray[i] * 5);
    }
  return newArray;
}

console.log(number(startingArray));


/* create a function that takes 2 arguments & this function should return a new array
that contains all the numbers (inclusive) between the two numbers provided*/

function count (x, y) {
  let anothernewArray = [];
//could also just do x & y
  for (let i = arguments[0]; i <= arguments[1]; i++) {
    anothernewArray.push(i);
  }
  return anothernewArray;
}

console.log(count(2, 6));


/* create a function that takes another function as its argument & will multiply
the returned value of that function by 10*/

function myNumber () {
  return 6
}

function outerFunction (fn) {
  return fn() * 10;
}

console.log(outerFunction(myNumber));
