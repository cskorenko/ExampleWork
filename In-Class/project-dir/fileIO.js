let fs = require('fs');
let path = require('path');

const message = {
  createFile,
  readFile,
  appendFile,
  deleteFile
};

function createFile (fileName, contents) {
  fs.writeFileSync(fileName, contents);
  return fs.readFileSync(fileName, 'utf-8');
}

function readFile(fileName) {
  return fs.readFileSync(fileName, 'utf-8');
}

function appendFile(fileName, contents) {
  fs.appendFileSync(fileName, contents, 'utf-8');
  return fs.readFileSync(fileName, 'utf-8');
}

function deleteFile(fileName) {
  let filePath= path.resolve(fileName);
  fs.unlinkSync(filePath);
  return 'File Deleted';
}

module.exports= message;
