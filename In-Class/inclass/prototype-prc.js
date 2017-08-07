//find some problems that accept a single data type as an argument and modify those solutions
//so they exsits on a prototype

/* Create a function that takes an array as an argument and logs each value
of that array to the console.
*/

// Array.prototype.isValue= function () {
//     for (let i = 0; i < this.length; i++) {
//     console.log(this[i]);
//   }
// }
//
// let myArr = [6, 8, 23, 24, 56];
// myArr.isValue();



/*create a new function that takes an array as an argument & loops through and multiples each number in the array by 5
then returns a new array containting the new values*/

// Array.prototype.mutliplyNumber = function () {
//     let newArray = [];
//       for ( let i = 0; i < this.length; i++) {
//         newArray.push(this[i] * 5);
//       }
//     return newArray;
// }
//
// const startingArray = [3, 5, 7];
//
// console.log(startingArray.mutliplyNumber());
//
// //think of something that can add as a prototype
// //have a few defaults on prototype & create a few instances & shadow a few things

// function Animal () {
//
// }
// Animal.prototype.numLegs= 4;
// Animal.prototype.hasTail= true;
// Animal.prototype.color= 'white';
// Animal.prototype.myInfo= function (){
//   return "Hi, my name is " + this.name + ". I'm " + this.color + " and have " + this.numLegs + " legs.";
// }
//
// let dog = new Animal ();
// dog.name= 'Boo';
// // console.log(dog);
// // console.log(dog.numLegs);
// console.log(dog.myInfo());
//
//
// let cat = new Animal();
// cat.name= 'Fluffy';
// cat.color= 'orange';
// // console.log(cat);
// // console.log(cat.color);
// // console.log(cat.hasTail);
// console.log(cat.myInfo());
//
//
// let bird = new Animal ();
// bird.name= 'Polly';
// bird.hasTail= false;
// bird.color= 'blue';
// // console.log(bird);
// // console.log(bird.hasTail);
// console.log(bird.myInfo());


// function Accessories() {
//   this.name = '';
// }
//
// function Purse() {
//   Accessories.call(this);
//   this.color= '';
//   this.strap= true;
//   this.cost= 0;
// }
// Purse.property= Object.create(Accessories);
//
// let jimmyBag = new Purse();
// jimmyBag.name=  'Jimmy Chu';
// jimmyBag.color= 'red';
// jimmyBag.cost= 1000;
// console.log(jimmyBag);



function Accessories(name) {
  this.name = name;
}

function Purse(color, numStrap, cost) {
  Accessories.call(this);
  this.color= '';
  this.strap= true;
  this.cost= 0;
}
Purse.property= Object.create(Accessories);

let jimmyBag = new Purse();
jimmyBag.name=  'Jimmy Chu';
jimmyBag.color= 'red';
jimmyBag.cost= 1000;
console.log(jimmyBag);
