//general function
function greeting (message) {
  console.log(message);
}

//Fucntion expression definition
let greeting = function greetingFunction (message) {
  console.log(message);
}

/*function constructor: not used a lot in practical programming
have to pass the statment in the paramteter */
let greeting = new Function('message', 'console.log(message);');

//arrow function: define a funtcion on one line
let greeting = (message) => {console.log(message);};

//arrow function: shorthand only works with a single paramteter
let greeting = message => console.log(message);

/*default paramaters: normally need the same num of values as arguments:
if you put a value in the argument its the default & will be used if no value is given */
function multiply (x, y = 10) {
  return x * y;
}

console.log(multiply(2, 3));

/* arguments object: only accessible in the body of the function-
but will give all the arg passed in the function */
function multiply (x = 4, y = 10) {
  console.log(arguments)
  //result looks like {'0':'4', '1': '10'} similar to the array first number is position
  argument[0] = 10;
  // can reassign the argument by using above code
  return x * y;
}


//functions can be passed around the same way vars can

function addTwo (number) {
  return number + 2;
}

function addThree (number) {
  return number + 3;
}
//the function below is going to expect a function as it's second argument
function multiFunction (number, fn) {
  fn(number)
  //above will call the addTwo function and give the number that was called into the multiFunction and then run multiFunction
}

console.log(multiFunction(2, addTwo));


function addTwo (number) {
  return number + 2;
}

function addThree (number) {
  return number + 3;
}
//the function below is going to expect a function as it's second & third argument
function multiFunction (number, fn, fnTwo) {
  return fnTwo(fn(number)
}

console.log(multiFunction(2, addTwo, addThree));
