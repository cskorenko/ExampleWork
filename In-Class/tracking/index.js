const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const errMiddleware = require('./err-middleware');
const app = express();

// user can only login in 5 times a day- need a way to keep track
// GET /tracking
  // Query params:
    // error to check to see if params are undefined
    // - username
    // - currentDate(YYYY-MM-DD)
    // - error Middleware

const trackingCache = {};

app.get('/tracking', (req, res, next) => {

  if(!req.query || !req.query.username || !req.query.currentDate) {
    // res.status(403).send('Username or Current Date is undefined').end();
    next('Username and/or current date is undefined');
  }

  const user = req.query.username;
  const date = req.query.currentDate;

  if(!trackingCache[user]) {
    trackingCache[user] = {};
    trackingCache[user][date] = 0;
  }

  if(!trackingCache[user][date]) {
    trackingCache[user][date] = 0;
  }

  trackingCache[user][date] += 1;

  console.log(trackingCache)

  if(trackingCache[user][date] > 5) {
    res.status(403).send('Exceeded Login Attempts').end();
  }

res.status(200).end();
});

app.use(errMiddleware);

app.listen(3002, () => {
  console.log('Listening on Port 3002');
});

module.exports = app;
