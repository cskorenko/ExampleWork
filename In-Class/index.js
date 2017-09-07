// pulling routers from in-class/routes folder

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json()); // using the body-parser we installed
app.use('/', routes);

app.listen(3000, () => {
  console.log('Puppies and Kitties Application listening on Port 3000');
});

module.exports = app;
