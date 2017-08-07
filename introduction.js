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
