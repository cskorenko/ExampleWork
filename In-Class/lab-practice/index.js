// npm modules uuid & moment
const express = require('express');
const bodyParser = require('body-parser');
const user = require('./user');
const helpers = require('./helpers');
const errMiddleware = require('./err-middleware');

const uuidv4 = require('uuid/v4');
const moment = require('moment');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json(user);
});

app.get('/users/:id', (req, res, next) => {
  // let idUser = getID(user, req.params.id);
  // res.status(200).json(idUser);
  const users = user.filter((userObject) => {
  return req.params.id === userObject.id;
  });

  if(typeof users[0] === 'undefined') {
    next('Invalid User ID');
  } else if (users[0].id === req.params.id) {
    res.status(200).send(users[0]);
  }
});

app.post('/', (req, res, next) => {
  let userCopy = Object.assign({}, req.body);
  if(helpers.validateInput(userCopy)) {
    userCopy.id = uuidv4();
    userCopy.created = moment(Date.now()).format('YYYY-MM-DD');
    user.push(userCopy);
    res.status(200).json(userCopy);
  } else {
    next('invalid user data supplied');
    // res.status(500).send('Invalid User Submission');
  }
});

app.use(errMiddleware);

app.listen(3001, () => {
  console.log('Listening on Local Port 3001:')
});

function getID (arr, id) {
  let user;
  for(let i = 0; i < arr.length; i++) {
    if(id === arr[i].id) {
      user = arr[i];
    }
  }
  return user;
}

// function updateUser (arr, newUser, id) {
//   for(let i = 0; i < arr.length; i++) {
//     if(id === arr[i].id) {
//       arr[i].username = newUser.username;
//       arr[i].firstname = newUser.firstname;
//       arr[i].lastname = newUser.lastname;
//       arr[i].password = newUser.password
//       arr[i].created = newUser.created;
//     }
//   }
//   return arr[i];
// }

module.exports = app;
