//readable stream exercise:

// let fs= require('fs');
// let http= require('http');
//
//
// const server= http.createServer((req, res) => {
//   let filename= 'lorem_txt.txt';
//
//   let options= {
//     encoding: 'utf-8',
//     highWaterMark: 2 * 1024
//   };
//
//   let readfile= fs.createReadStream(filename, options);
//
//   let fileData= '';
//   readfile.on('data', (chunk) => {
//     fileData+= chunk;
//   });
//
//   readfile.on('end', () => {
//     res.write(fileData);
//     res.end();
//   });
//
// });
//
// server.listen(3001);

//unzip exercise:
let fs= require('fs');
let zlib= require('zlib');

let compressedFile= 'lorem.zip';
let uncompressed= 'lorem.txt';

let readable= fs.createReadStream(compressedFile);
let writeable= fs.createWriteStream(uncompressed);
let unzip= zlib.createGunzip(); //unzips a zipped file- duplex stream

readable.pipe(unzip).pipe(writeable);
