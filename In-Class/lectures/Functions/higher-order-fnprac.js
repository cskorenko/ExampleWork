const pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];

// create a fn that takes the array of objects and loops through and only returns the dog objects

// function isDog (arr) {
//   let dogs = [];
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i].type === 'dog') {
//       dogs.push(arr[i]);
//     }
//   }
//   return dogs;
// }

// console.log(isDog(pets));
//
// let isCat = function (element, index, OrgArr) {
//   if(element.type === 'cat') {
//     return true;
//   }
// };
//
// let onlyCat = pets.filter(isCat);
// console.log(onlyCat);

// one fn that takes another fn as an argument: array of pets, 2nd fn
// create 2nd fns should be the array of pets
// true if dog

function isDog (pet) {
  return pet.type === 'dog';
}

function isCat (pet) {
  if(pet.type === 'cat') {
    return true;
  }
}

function filterPets (arr, fn) {
  let pets = [];
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i])) {
      pets.push(arr[i]);
    }
  }
  return pets;
}

// console.log(filterPets(pets, isDog));
// console.log(filterPets(pets, isCat));
// console.log(pets.filter(isCat)); // using filter fn instead

// make a manual loop that mimics the map function

function mappedPets (arr) {
  for(let i = 0; i <arr.length; i++) {
    if(arr[i].type === 'dog') {
      arr[i].isPrecious = true;
    } else {
      arr[i].isPrecious = false;
    }
  }
  return arr;
}

// console.log(mappedPets(pets));

function isPrecious (pet) { //could also do (pet, index, origArray) if you were going to use them
  if(pet.type === 'dog') {
    pet.isPrecious = true;
  } else {
    pet.isPrecious = false;
  }

  return pet;
}

function updatePet (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }

  return arr;
}

// console.log(updatePet(pets, isPrecious));
// console.log(pets.map(isPrecious));


// reduce- make a manual loop that mimics the reduce function
// loop and count number of elements that are dogs

// function totalDogs (arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].type === 'dog') {
//       total++;
//     }
//   }
//   return total;
// }
//
// console.log(totalDogs(pets));

// do as a higher-order-fn
// 1st fn - arr, inital value, fn
// 2nd fn - current total, pet obj from arr (should check if type if dog & add 1 or return current total if not)

let count = function (currTotal, pet) {
  if (pet.type === 'dog') {
    return currTotal + 1;
  } else {
    return currTotal;
  }
}

let incrementDogs = function (arr, intValue, fn) {
  let total = intValue;

  for(let i = 0; i < arr.length; i++) {
    total = fn(total, arr[i]);
  }

  return total;
}

let totalDogs = incrementDogs(pets, 0, count);
console.log(totalDogs);
