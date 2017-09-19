// npm modules uuid & moment

const express = require('express');
const user = require('user.js');

const app = express();


app.listen(3000, () => {
  console.log('Listening on Local Port 3000:')
});

module.exports = app;
