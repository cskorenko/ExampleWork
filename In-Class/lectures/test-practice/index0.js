const express = require('express');
const bodyParser = require('body-parser');
const errMiddleware = require('./err-middleware')
const helper = require('./helpers');
const moment = require('moment');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my login app');
});

app.post('/', (req, res, next) => {
  const user = {
    username: req.body.username,
    password: req.body.password
  };

  const url = 'http://localhost:3001/';

  helper.sendRequest(url).then((results) => {
    // console.log(results.body);
    // let result = JSON.parse(results.body);
    const validUser = helper.validateUser(JSON.parse(results.body), user);

    if(!validUser) {
      // res.status(401).end();
      throw new Error('Invalid User Credentials');
      // next('Invalid User');
    } else if (validUser) {
      let todayDate = moment(Date.now()).format('YYYY-MM-DD');
      let urlTracking = `http://localhost:3002/tracking?username=${user.username}&currentDate=${todayDate}`

      return helper.sendRequest(urlTracking);
    }
  }).then((results) => {
    if(results.res.statusCode === 403) {
      throw new Error('Too Many Login Attemps');
    } else {
      res.status(200).json(user);
    }
  }).catch((e) => {
    next(e);
  });
});

app.use(errMiddleware);

app.listen(3003, () => {
  console.log('Listening on Port 3003')
});


module.exports = app;
