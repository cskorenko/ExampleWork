//Javascripting
//Introduction
console.log('hello');

//Variables
var example= 'some string';
console.log(example);

//Strings
var someString= 'this is a string';
console.log(someString);

//String Length
var example= 'example string';
console.log(example.length);

//Revising Strings
var pizza= 'pizza is alright';
pizza= pizza.replace('alright', 'wonderful');
console.log(pizza);

//Numbers
var example= 123456789;
console.log(example);

//Rounding Numbers
var roundUp= 1.5;
var rounded= Math.round(roundUp);
console.log(rounded);

//Number to String
var n= 128;
n= n.toString();
console.log(n);

//If Statments
var fruit= typeof(orange);

if (fruit.length > 5) {
  console.log("The fruit name has more than five characters.");
} else {
  console.log("The fruit name has five characters or less.");
}

//For Loop
var total= 0;
var limit= 10;

for (var i=0; i < limit; i++) {
  total += i;
}

console.log(total);

//Arrays
var pizzaToppings= ['tomato sauce', 'cheese', 'pepperoni'];
console.log(pizzaToppings);

//Array Filtering
var numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filtered= numbers.filter(function (numbers) {
  return numbers % 2 === 0;
});

console.log(filtered);

//Accessing Array Values
var food= ['apple', 'pizza', 'pear'];
console.log(food[1]);

//Looping Through Arrays
var pets= ['cat', 'dog', 'rat'];

for(var i=0; i < pets.length; i++) {
  pets[i] += 's';
}

console.log(pets);

//Objects
var pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2
}

console.log(pizza);

//Object Properties
var food= {
  types: 'only pizza'
};

console.log(food.types);

//Functions
function eat (food) {
  return food + ' tasted really good.';
}

console.log(eat('bananas'));

//Function Arguments
function math (num1, num2, num3) {
  return (num2 * num3) + num1;
}

console.log(math(53, 61, 67));

//Scope
var a = 1, b = 2, c = 3;

     (function firstFunction(){
         var b = 5, c = 6;

         (function secondFunction(){
             var b = 8;

             (function thirdFunction(){
                 var a = 7, c = 9;

                 (function fourthFunction(){
                     var a = 1, c = 8;

                 })();
             })();
             console.log("a: "+a+", b: "+b+", c: "+c);
         })();
     })();


//Free Code Camp
// Factorialize a Number
function factorialize(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorialize(num-1);
}

factorialize(5);

//Check for Palindromes- I can'tfigure out why it won't just return the result
//it requires me to console.log or it won't show up

function palindrome(str) {
var currStr= str.replace(/[\W_]/g, '').toLowerCase();
var newStr= str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
var result;

if(currStr === newStr) {
  result= true;
} else {
  result= false;
}

return result;
}

palindrome("A man, a plan, a canal. Panama");


//Seek and Destroy

function destroyer(arr) {
var args= arr.slice.call(arguments);

  for (var i= 0; i < arr.length; i++) {
    for(var j=1; j < args.length; j++) {
      if(arr[i] === args[j]) {
        delete arr[i];
      }
    }

    }

return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Confirm the ending
function confirmEnding(str, target) {

  if(str.substr(str.length-target.length) === target) {
    str= true;
  } else {
    str= false;
  }
  return str;
}

confirmEnding("Bastian", "n");

//return the largest number
function largestOfFour(arr) {
 var newArray= [];

  for(var i=0; i < arr.length; i++) {
   largestNumber= arr[i][0];
    for(var j=0; j<arr.length; j++) {
     if(arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
     newArray.push(largestNumber);
  }
  return newArray;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Exercism.io
//hello-world
var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
    return "Hello, World!";
};
//

module.exports = HelloWorld;

//Leap
var Year = function(Year) {
  this.Year= Year;
};

Year.prototype.isLeap = function() {
  if (this.Year % 4 === 0 && this.Year % 100 !== 0 || this.Year % 400 === 0) {
    return true;
  } else {
    return false;
  }

};

module.exports = Year;

//Hamming
var hamming= function () {
}

hamming.prototype.compute= function (input, input1) {
var hammingValue=0;

if(input.length !== input1.length) {
  throw Error('DNA strands must be of equal length.');
}

for(var i =0; i < input1.length; i++) {
  if(input1[i] !== input[i]) {
    hammingValue += 1;
  }

}
return hammingValue;
}

  module.exports = hamming;

  //rna-transcriber
  var dnaTranscriber = function () {
}
;
dnaTranscriber.prototype.toRna = function (input) {
input= input.split('');


for(var i =0; i < input.length; i++) {
  if(input[i] === 'G') {
    input[i] = 'C';
  } else if(input[i] === 'C') {
    input[i] = 'G';
  } else if (input[i] === 'T') {
    input[i] = 'A';
  } else if(input[i] === 'A') {
    input[i] = 'U';
  } else {
    throw Error('Invalid input');
  }

}
return input.join('');
}

  module.exports = dnaTranscriber;
