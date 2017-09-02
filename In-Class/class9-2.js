//Express continued

//Create a basic express Server
const express= require('express');
const app= express();

const router= require('./routes2');

app.use('/', router)

app.listen(5000, () => {
  console.log('Listening on Port 5000');
});
