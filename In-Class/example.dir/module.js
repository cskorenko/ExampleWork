const numModule = {
  numFun,
};

function numFun (array, num) {
  let retArr= [];
  for(let i =0; i < array.length; i++) {
    if(array[i] === num && i === 0) {
      retArr.push(array[array.length-1]);
      retArr.push(array[i+1]);
    } else if(array[i] === num && i === array.length-1) {
      retArr.push(array[i-1]);
      retArr.push(array[0]);
    } else if(array[i] === num) {
      retArr.push(array[i-1]);
      retArr.push(array[i+1]);
    }
  }
  return retArr;
}

module.exports= numModule;
