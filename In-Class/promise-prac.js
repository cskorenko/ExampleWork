let http= require("http");
let multiply= require("./module");

// const server= http.createServer((req, res) => {
//     fsModule.createFile('index.txt')
//     .then(() => {
//       return fsModule.appendFile('index.txt', "Hello World");
//     })
//     .then(() => {
//       return fsModule.readFile('index.txt');
//     })
//     .then((readFile) => {
//       res.write(readFile);
//       res.end();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//
// });

const server= http.createServer((req, res) => {
  let multiplePromises= [];

  multiplePromises.push(multiply.multiplyFunction(4, 5));
  multiplePromises.push(multiply.multiplyFunction(6, 7));
  multiplePromises.push(multiply.multiplyFunction(8, 9));
  multiplePromises.push(multiply.multiplyFunction(1, 2));
  multiplePromises.push(multiply.multiplyFunction(3, 4));

  Promise.all(multiplePromises)
  .then((data) => {
    console.log(data);
    res.write(data.toString());
    res.end();
  })
  .catch((err) => {
    console.log(err);
  });
});

server.listen(3002);
