// let fs = require('fs');
//
// let fsModule = {
//     createFile: createFile,
//     appendFile: appendFile,
//     readFile: readFile
// };
//
// function createFile(fileName) {
//     return new Promise(function(resolve, reject) {
//         fs.writeFile(fileName, '', (err) => {
//             if (err) {
//                 return reject(err);
//             }
//             return resolve();
//         });
//     });
// };
//
// function appendFile(fileName, fileContents) {
//     return new Promise(function(resolve, reject) {
//         fs.appendFile(fileName, fileContents, (err) => {
//             if (err) {
//                 return reject(err);
//             }
//             return resolve();
//         });
//     });
// }
//
// function readFile(fileName) {
//     return new Promise(function(resolve, reject) {
//         fs.readFile(fileName, 'utf8', (err, fileData) => {
//             if (err) {
//                 return reject(err);
//             }
//             return resolve(fileData);
//         });
//     });
// }
//
// module.exports = fsModule;

let multiplyModule = {
  multiplyFunction
};

function multiplyFunction (x, y) {
  return new Promise ((resolve, reject) => {
      return resolve(x * y);
  });
}

module.exports = multiplyModule;
