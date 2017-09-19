// const router = require('express').Router();
const uuidv4 = require('uuid/v4');
const moment = require('moment');

const users = [
  {
    id: uuidv4(),
    username: 'cskorenko',
    firstname: 'Christine',
    lastname: 'Skorenko',
    password: 'hello1234',
    created: '1912-06-23',
  },
  {
    id: uuidv4(),
    username: 'benpumm106',
    firstname: 'Ben',
    lastname: 'Pummill',
    password: 'star453^',
    created: '1879-03-14',
  },
  {
    id: uuidv4(),
    username: 'jared567',
    firstname: 'Jared',
    lastname: 'Smith',
    password: 'firestorm875%',
    created: '1815-12-10',
  },
  {
    id: uuidv4(),
    username: 'missyP56',
    firstname: 'Missy',
    lastname: 'Paul',
    password: 'Queen653',
    created: '2003-05-27',
  },
  {
    id: uuidv4(),
    username: 'julemd90',
    firstname: 'Julie',
    lastname: 'Douglas',
    password: 'deadmau5',
    created: '2017-01-23',
  }
];

// router.get('/', (req, res) => {
//   res.status(200).json(users);
// });

module.exports = users;
