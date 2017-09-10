const router = require('express').Router();
const cars = require('./cars');
const trucks = require('./trucks');


router.get('/', (req, res) => {
  res.status(200).send('Welcome to Cars and Trucks');
});

router.use('/cars', cars);
router.use('/trucks', trucks);

module.exports = router;
