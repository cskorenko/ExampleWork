/* model: section on app that deals with data- reads from a file/database
View: present to user- i.e. webpage- application
Controller: Business logic lives: respond to data
OR MVC

MVC Structure:

project/
  Controllers/ - business logic
  helpers/ or utilites/ - code or fn's used across the application
  middleware/ - directory to store middleware writing could be in controllers directory
  models/ - data
  public/ - name of directory that you give that stores public assets- css, images
  views/ - user side -html
    .gitignore -npm packages for Github to ignore
  app.js - entry point to run app - node app.js
  package.json - npm dependecies keep track of scripts to run tests
  README.md - info about the project


Tool that helps code quality
linter- analyzes code you written for syntax. will print out errors


Tools for running unit tests
mocha- mochajs.org
write fn's that run tests & tracking output to see where tests fail

other tool to run tests is:
Chai- chaijs.com
*/
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Testing routes is awesome!');
});

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});

module.exports = app;
