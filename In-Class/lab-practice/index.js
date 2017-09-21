// npm modules uuid & moment
const express = require('express');
const bodyParser = require('body-parser');
const user = require('./user');
const uuidv4 = require('uuid/v4');
const moment = require('moment');
const helpers = require('./helpers');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json(user);
});

app.get('/users/:id', (req, res) => {
  let idUser = getID(user, req.params.id);
  res.status(200).json(idUser);
  // const user = users.filter((userObject) => {
  //   return req.params.id === userObject.id;
  // });
  res.status(200).send(user[0]);
});

app.post('/', (req, res) => {
  let userCopy = Object.assign({}, req.body);
  if(helpers.validateUser(userCopy)) {
    userCopy.id = uuidv4();
    userCopy.created = moment(Date.now()).format('YYYY-MM-DD');
    user.push(userCopy);
    res.status(200).json(userCopy);
  } else {
    res.status(400).send('Invalid User Submission');
  }
});

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
