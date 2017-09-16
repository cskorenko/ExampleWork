// High order functions:
//  - a fn that takes a fn as an argumnet
//  - a fn that returns a fn
// let us organize our code and readiblality in complex code
// Types: filter, map,

// Filter Fn: filters through some data and returns some part

const pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];

// element is first elemnt in array; index is first position, orginal array
// only returns the elemnt is true in the fns
// const isDog = function(element, index, origArray) {
//   if (element.type === 'dog') {
//     return true;
//   }
// };
//
// let startswithS = function () {
//
// };

// let dogsThatStartWithS = pets.filter(isDog).filter(startswithS)
//
// let dogs = pets.filter(isDog);


// let dogs = pets.filter((element, index, origArray) => {
//   if (element.type === 'dog') {
//     return true;
//   }
// });

// console.log(dogs);


// Map higher-order-fn
// instead of filtering it replaces elemeents in the array with the fn return

let mappedPets = pets.map((element, index, origArray) => {
  if(element.type === 'cat') {
    element.isPrecious = false;
    return element;
  } else {
    element.isPrecious = true;
    return element;
  }
});

console.log(mappedPets);

let mappedNames = pets.map((element, index, origArray) => {
  return element.name;
});

console.log(mappedNames);


// higher-order-fn: reduce fn: often used with map
// fn on the array prototype that takes callback fn
// adds result of each element of the fn we define to an accumliated value so
// we can pass that value on

let dogCount = pets.reduce((accumulator, element, index, origArray) => {
  if(element.type === 'dog') {
    return accumulator + 1;
  } else {
    return accumulator;
  }
}, 0); // intital value it will use for its accumulator- is optional. if you don't
       // pass in, it will use the 1st element in the arr that reduce is on.

console.log(dogCount);
