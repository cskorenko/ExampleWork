const router = require('express').Router();

const kitties = require('./kitties');
const puppies = require('./puppies');

router.get('/', (request, response) => {
  response.status(200).send('Welcome to Puppies & Kitties!');
});

router.use('/kitties', kitties); //telling routes to use /kitties end point
router.use('/puppies', puppies);


module.exports= router;
