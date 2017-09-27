const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const user = require('../lab-practice/user');
const app = express();

// user can only login in 5 times a day- need a way to keep track
// GET /tracking
  // Query params:
    // - username
    // - currentDate(YYYY-MM-DD)

const trackingCache = {};

app.get('/tracking', (req, res) => {
  // if no username or error

  const user = req.query.username;
  const date = req.query.currentDate;

  if(!trackingCache[user]) {
    trackingCache[user] = {};
    trackingCache[user][date] = 0;
  } else if (trackingCache[user][date] < 5) {
    trackingCache[user][date] += 1;
    res.status(200).send(trackingCache[user][date]);
  } else if(trackingCache[user][date] > 5) {
    res.status(500).send('Exceeded Logins');
  }

});


app.listen(3002, () => {
  console.log('Listening on Port 3002');
});

module.exports = app;
