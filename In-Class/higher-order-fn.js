// High order functions:
//  - a fn that takes a fn as an argumnet
//  - a fn that returns a fn
// let us organize our code and readiblality in complex code

// Filter Fn: filters through some data and returns some part

const pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Ugly', type: 'cat' },
  { name: 'Reece', type: 'dog' },
];

// element is first elemnt in array; index is first position, orginal array
// only returns the elemnt is true in the fns
const isDog = function(element, index, origArray) {
  if (element.type === 'dog') {
    return true;
  }
};

let startswithS = function () {

};

let dogsThatStartWithS = pets.filter(isDog).filter(startswithS)

let dogs = pets.filter(isDog);


// let dogs = pets.filter((element, index, origArray) => {
//   if (element.type === 'dog') {
//     return true;
//   }
// });

console.log(dogs);
