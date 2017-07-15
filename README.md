# homework_7_12
Homework from Class on 7/12/17

for (let i =1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i + "Fiz");
  } else if (i % 5 === 0) {
    console.log(i + "Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + "FizzBuzz");
  }
}



function getAverage (myArr) {
  let total = 0;
  let average = 0;

  for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
  }

  average =   Math.floor(total/myArr.length);
  return average;
}


console.log(getAverage([2,2,2,2])); //2
console.log(getAverage([1,2,3,4,5,])); //3
console.log(getAverage([1,1,1,1,1,1,1,2])); //1
