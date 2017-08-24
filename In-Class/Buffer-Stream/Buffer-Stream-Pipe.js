//Streams/Buffers & Pipes: use when you have to deal with large amounts of data
/* Streams: A sequence of pieces of data made available over time that eventually form into a whole.
Can be from one computer to another or from one process to another.
Buffers: Temporary storage location for datain the process of being moved from one place
to another. Intentionally kept small.
Chunk: A piece of data being sent through a Streams
Pipes: a connect btw two streams
Binary Data: data stored in binary(1s and 0s)

Buffers in Node:
- Created on the C++ part of Node and made avliable to the JS portion via the Buffer function
- Doesn't need a require statement
- Buffers hold raw binary data, but we can apply encodings in order to convert the data into forms
that make sense to ppl.
- Raw buffer content is logged as hexadecimal
- Buffers are at a set length when you create them
- When you .write() which overwrites the data it writes right over the previous data

Buffer Creation:
var buf1= Buffer.from('This is a new buffer');
var buf2= Bruffer.from(buf1);
*when you cal .toString() on a biffer you get the response in a string form instead of binary
*/
var buf1= Buffer.from("Buffer Demo");
console.log(buf1); //<Buffer 42 75 66 66 65 72 20 44 65 6d 6f>
console.log(buf1.toString()); //Buffer Demo
console.log(buf1.toJSON()); //{ type: 'Buffer' (makes it a Javascript object)
                            //data: [ 66, 117, 102, 102, 101, 114, 32, 68, 101, 109, 111 ] } //ascii char codes
console.log(buf1[2]); //102

buf1.write(' No 1'); //we can write new data to a buffer by doing this (it overwrites what was there before)
console.log(buf1.toString()); //No 1r Demo

//Buffer use: won't write yourself but have to work with them
/* Streams: data isn't saved anywhere just stored in buffer
Event Emitter: Streams inheritate from event emitter objects
- any streams create have access to on & emmit
  - Data Event: how you interact with stream. want to call an event on this so it logs everytime
    it fills
      - provides a variable called chunk
  - End event: say when its ended
  - Close Event
  - ERROR

Types of Streams:
  - Writable Streams: streams to which data can be written
  - Readble Streams: Streams from which data can be read /also has a pipe method(with destinations, optional args)
  - Duplex Streams: streams that are both readable & Writable
  - Transform Streams: that are both readable & writable that can also modify data as it is read or written

Working with streams: instead of working directly with streams, you will create a stream object of your own
that will inherit from the type of string you want
  - all streams inherit from event emitter object

Example: Read from a stream:
Read from an existing file

let fs = require('fs');

let filename = 'lorem.txt'

let options = {
  encoding: 'utf-8'
  highWaterMark: 2 * 1024   //define a size for a buffer - 1024 largest
  //to break up into fewer chunks there is an option for that
}

let readable = fs.createReadStream(filename, options); //with options as 'utf-8'
you don't need toString on the chunk

readable.on('data', (chunk) => {   //data is the callback fn that you want to do something on everytime
  console.log(chunk.toString());
  //regular chunk will give hexadecimal
  chunk.length (print the buffers length)
});

you can also adjust the size of the buffer you are dealing with in a stream

Possible to capture the whole stream in a variable using chunks:

let fs = require('fs');

let filename = 'lorem.txt'

let fileData= '';

let options = {
  encoding: 'utf-8'
  highWaterMark: 2 * 1024
}

let readable = fs.createReadStream(filename, options);

readable.on('data', (chunk) => {
  fileData+= chunk;  //everytime you get the dataFile event append the chunk to fileData variable
});

readable.on('end', () => {
  console.log(fileData); //this will log the data in the console
});

console.log(fileData); //this shows up empty since this is an Asynchros process: need to register a new event

How to write to streams:


let fs= require('fs');

let fileName= 'lorem.txt';
let newFileName= 'lorem-copy.txt';

let options = {
  encoding: 'utf-8',
  highWaterMark: 8 * 1024  //if you do parseing through large CSV data: you would want to do smaller chunks
}

let readable= fs.createReadStream(fileName, options);
let writable= fs.createWriteStream(newFileName); //not registering any callbacks
                                                //or listeners on it instead call .write

readable.on('data', (chunk) => {
  writeable.write(chunk); //.write will copy to the new file & automatically add
                          //that file and push contact per chunk
});

/*Easier way to do above is pipes:
  -used to send data from one stream to the other
  -connect a readable to a writeable
  -if readable is larger than buffer the data transfer will happen in chunks

Pipe Chaining: if its a duplex stream, it can be piped again to another writeable stream
- can be chained indefinetly so long as first one is readable and everyother stream is Duplex (write & read)

Pipe Example:
*/
let fs= require('fs');

let fileName= 'lorem.txt';
let newFileName= 'lorem-copy.txt';

let options = {
  encoding: 'utf-8',
  highWaterMark: 8 * 1024
}

let readable= fs.createReadStream(fileName, options);
let writable= fs.createWriteStream(newFileName);

readable.pipe(writeable); //writeable is the destination (writeable has to be created)

/*node standard library to zip files= Zlib
have to require 'zlib'
zlib.createGzip();
*/
let fs= require('fs');
let zlib= require('zlib');

let fileName= 'lorem.txt';
let zippedFileName= 'lorem.zip';

let options = {
  encoding: 'utf-8',
  highWaterMark: 8 * 1024
}

let readable= fs.createReadStream(fileName, options);
let writable= fs.createWriteStream(zippedFileName);
let compressed= zlib.createGzip(); //creates the zip stream

readable.pipe(writeable);
readable.pipe(compressed).pipe(writeable); //first is the destination to pipe data to from readable stream
                                                //then pipe result to next destination
