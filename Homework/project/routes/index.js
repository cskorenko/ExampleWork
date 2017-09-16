const router = require('express').Router();

const cars = require('./cars');
const trucks = require('./trucks');
const example = require('./example');


router.get('/', (request, response) => {
  response.status(200).send('Welcome to Cars and Trucks');
});

router.use('/cars', cars);
router.use('/trucks', trucks);
router.use('/example', example);

module.exports = router;
