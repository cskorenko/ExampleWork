let http= require("http");
let fsModule= require("./module");

const server= http.createServer((req, res) => {
    fsModule.createFile('index.txt')
    .then((fileName) => {
      return fsModule.appendFile('index.txt', "Hello World");
    })
    .then((appendFile) => {
      return fsModule.readFile('index.txt');
    })
    .then((readFile) => {
      res.write(readFile);
      res.end();
    })
    .catch((err) => {
      console.log(err);
    })

});

server.listen(3002);
