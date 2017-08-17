const returnNums= require('./module');

console.log(returnNums.numFun([62,89,56,45,12,91,81], 45));
console.log(returnNums.numFun([62,89,56,45,12,91,81], 62));
console.log(returnNums.numFun([62,89,56,45,12,91,81], 81));


//path module
let path = require('path');

let output= path.basename('~/ExampleWork/In-Class/index.js', '.js');

console.log(output);

//fs module (3rd arg is optional)
let fs = require('fs');

fs.writeFileSync('new-file.txt', 'Mmm, pancake!');

let filePath= path.resolve('new-file.txt');
fs.unlinkSync(filePath);
