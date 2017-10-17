const express = require('express');
const bodyParser = require('body-parser')

const mongodb = require('./mongodb.utils');

const app = express();

app.use(bodyParser.json());
mongodb.createEventListeners();
mongodb.connect();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the library!')
});





app.listen(3000, () => {
  console.log('Listening on port 3000');
});

module.exports= app;
