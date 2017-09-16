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

console.log(filterPets(pets, isDog));
console.log(filterPets(pets, isCat));
