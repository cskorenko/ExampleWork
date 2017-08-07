//isoltated scope in loops: can't reassign a const
/*const arrayOfNumbers = [6, 4, 83, 58, 39, 0];
for (i=0; i< arrayOfNumbers.length; i++) {
  const currentNumber= arrayOfNumbers[i];
  console.log('current number in loop: ' + currentNumber);
}*/
// can't call currentNumber outside of its current scope

//want to find the sum need the sum var to be outside of the loop
const arrayOfNumbers = [6, 4, 83, 58, 39, 1];
let sum = 0;
for (i = 0; i < arrayOfNumbers.length; i++) {
  const currentNumber= arrayOfNumbers[i];
  sum += arrayOfNumbers[i];
  console.log('current number in loop: ' + currentNumber);
  console.log(sum);
}
