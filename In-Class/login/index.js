const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my login app');
});

app.listen(3003, () => {
  console.log('Listening on Port 3003')
});

module.exports = app;
