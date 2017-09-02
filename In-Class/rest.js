//REST use exercises
/* JSON Place Holder
http://jsonplaceholder.typicode.com
*/
const http= require('http');
const baseUrl= 'jsonplaceholder.typicode.com';
// const httpOptions = {
//   host: baseUrl,
//   path: '/posts'
// };
//
// //get exisits to get quick catches
// http.get(httpOptions, (response) => {
//   response.setEncoding('utf-8');
//
//   let body= '';
//   response.on('data', (chunk) => {
//     body += chunk;
//   });
//
//   response.on('end', () => {
//     console.log(JSON.parse(body));
//   });
// });

//defining a method doesn't use GET
//creation of a record
// const httpPOSTOptions = {
//   host: baseUrl,
//   path: '/posts/1/comments',
//   method: 'POST'
//
// };
//
// const postData = {
//   title: 'test',
//   body: 'this is a test host',
//   userId: 1
// };
//
// const req= http.request(httpPOSTOptions, (response) => {
//   response.setEncoding('utf-8');
//
//   let body= '';
//   response.on('data', (chunk) => {
//     body += chunk;
//   });
//
//   response.on('end', () => {
//     console.log(body);
//   });
// });
//
// req.write(JSON.stringify(postData)); //JSON object with 1 property: id: 101
// req.end();

//pull comments from a post
// const httpComOptions = {
//   host: baseUrl,
//   path: '/posts/4/comments'
// };
//
// //get exisits to get quick catches
// http.get(httpComOptions, (response) => {
//   response.setEncoding('utf-8');
//
//   let body= '';
//   response.on('data', (chunk) => {
//     body += chunk;
//   });
//
//   response.on('end', () => {
//     console.log(JSON.parse(body));
//   });
// });

//write a request to edit an existing post & change the body

const httpPUTOptions = {
  host: baseUrl,
  path: '/posts/1',
  method: 'PUT'
};

const putData = {
  body: 'this is a test'
};

const req= http.request(httpPUTOptions, (response) => {
  response.setEncoding('utf-8');

  let body= '';
  response.on('data', (chunk) => {
    body += chunk;
  });

  response.on('end', () => {
    console.log(body);
  });
});

req.write(JSON.stringify(putData));
req.end();
