// npm modules uuid & moment
const express = require('express');
const bodyParser = require('body-parser');
const user = require('./user');
const uuidv4 = require('uuid/v4');
const moment = require('moment');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json(user);
});

app.get('/users/:id', (req, res) => {
  let idUser = getID(user, req.params.id);
  res.status(200).json(idUser);
});

app.post('/', (req, res) => {
  let userCopy = Object.assign({}, req.body);
  userCopy.id = uuidv4();
  userCopy.created = moment(Date.now()).format('YYYY-MM-DD');
  user.push(userCopy);
  res.status(200).json(userCopy);
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
