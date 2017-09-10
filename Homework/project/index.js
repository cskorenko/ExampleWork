const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes');

const app = express();

app.use('/', routes);

app.listen(3000, () => {
  console.log('Listening on port 3000:')
});

module.exports = app;
