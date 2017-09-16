//Express continued

//Create a basic express Server
// const express= require('express');
// const app= express();
//
// const router= require('./routes2');
//
// app.use('/', router)
//
// app.listen(5000, () => {
//   console.log('Listening on Port 5000');
// });

/*last class and exercise above are example of api's with routers
on seperate file.

Now learning more advanced structirng

/- Root
  /puppies
    /puppies/id
  /kitties
    /kitties/id

creating documentation for people consuming your API

*GET /*

  - DESC Root
  - text/html
  - Data: "Welcome to Puppies & Kittens!"

see index.js & routes folder for today's example work

npm install body-parse --save
  - help parse express bodies
