/* Encoding & Decoding
HTTP.createServer()
https://nodejs.org/docs/v8.3.0/api/http.html#http_class_http_server

net.Server
Creates either a TCP or local Server
Inherits from Event Emitter

Creating a web server:
1-call create and define request listener callback
*/

// const http = require('http');
// http.createServer((request, response) => {
//   response.writeHead(200, {
//     'Content-Type': 'application/json' //3- create response header: meta data about the response associated with it
//   });
//
//   const responseBody = {
//     one: 'This is a reponse from my web server',
//     two: 'This is another reponse from my web server'
//   }
//   response.end(JSON.stringify(responseBody)); //4- create the body & send the response
// }).listen(5000, '127.0.0.1'); //2-Specify the port number& address the server should be listening for- stands for local host
//goes to localhost:5000.

/* Routing: mapping HTTP requests to content such as files that exist on the server,
or determining if logic
*/
// const http = require('http');
// const fs = require('fs');
// const url = require('url'); //bring in query (ie. posts?idclass=1)

// http.createServer((request, response) => {
//   if (request.url === '/person') {
//     const personObject = {
//       firstName: 'John',
//       lastName: 'Doe'
//   };
//
//     response.writeHead(200, {
//       "Content-Type": 'application/json'
//     });
//
//     response.end(JSON.stringify(personObject));
//   } else if (request.url === '/lorem') { //5000/lorem
//     //fs.createReadStream(__dirname + '/lorem.txt').pipe(response); //not ES6
//     fs.createReadStream(`${__dirname}/lorem.txt`).pipe(response); //ES6 complient
//
//   } else if (request.url === '/') {
//     response.writeHead(200, {
//       "Content-Type": 'text/plain'
//     });
//
//   response.end('Root Endpoint');
// } else {
//   response.writeHead(404);
//   response.end();
// }
// }).listen(5000, '127.0.0.1');


// http.createServer((request, response) => {
//   console.log('URL', request.url); //person?firstname=John&lastname=smith
//   const queryData= url.parse(request.url, true).query;
//   console.log(queryData);
//   response.writeHead(200);
//   response.end();
// }).listen(5000, '127.0.0.1');

//Method is attached to the request
//curl command- build http request & supply headers & transfer post & put data
//curl -i -X POST -H 'Content-Type: application/json' -d " " http://localhost:5000/person
// http.createServer((request, response) => {
//   if(request.url === '/person' && request.method === 'GET') {
//     const personObject = {
//       firstName: 'John',
//       lastName: 'Doe'
//     };
//
//     response.writeHead(200, {
//       'Content-Type': 'application/json'
//     });
//     response.end(JSON.stringify(personObject));
//   } else if (request.url === '/person' && request.method === 'POST') {
//     console.log('THE ENDPOINT TO CREATE A NEW USER\n');
//     response.writeHead(200);
//     response.end('THE ENDPOINT TO CREATE A NEW USER\n');
//   }
// }).listen(5000, '127.0.0.1');

// http.createServer((request, response) => {
//   if(request.url === '/person' && request.method === 'GET') {
//     const personObject = {
//       firstName: 'John',
//       lastName: 'Doe'
//     };
//
//     response.writeHead(200, {
//       'Content-Type': 'application/json'
//     });
//     response.end(JSON.stringify(personObject));
//   } else if (request.url === '/person' && request.method === 'POST') {
//     let body = '';
//
//     request.on('data', (chunk) => {
//       body += chunk;
//     });
//
//     request.on('end', () => {
//       response.writeHead(200, {
//         'Content-Type': 'text/plain'
//       });
//       response.end(`Request Body: ${body}\n`);
//     });
//   }
// }).listen(5000, '127.0.0.1');

//Express: web framework for NodeJS that speciliazes in api's
//biggest benefit is the routing & end points

const express= require('express');
const app= express(); //envoking the module sets up the express app

const routes= require('./routes');

app.use('/', routes);

//below only for not using routes v
// app.get('/', (request, response) => { //2 args 1st- string of route 2nd req & res
//   response.send("Hello from my Express app!");
// });

app.listen(5000, () => {
  console.log("Listening on Port 5000");
});

//define routes in a seperate .js files
