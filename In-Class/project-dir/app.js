const newFile = require('./fileIO');
const http = require('http');


const server = http.createServer((req, res) => {
  newFile.createFile('hello.txt', 'Hello World');
  newFile.appendFile('hello.txt', '\nGoodbye World');
  let writeToHTTP= newFile.readFile('hello.txt');

  newFile.createFile('class.txt', '\nI created a file!');
  newFile.appendFile('class.txt', '\nI added another line to my file!');
  writeToHTTP += newFile.readFile('class.txt');

  res.write(writeToHTTP);
  res.end()
});

server.listen(3000);
