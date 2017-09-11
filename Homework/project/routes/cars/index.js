const router = require('express').Router();

const cars = [
  {
    id: 1,
    name: 'Bob',
    make: 'Ford',
    model: 'Focus',
    features: ['4-door', '160 horsepower', '26/36 mpg'],
  },
  {
    id: 2,
    name: 'Betty',
    make: 'Mazda',
    model: 'CX5',
    features: ['4-door', '187 horsepower', '31 mpg'],
  },
  {
    id: 3,
    name: 'Freddy',
    make: 'Nissan',
    model: 'Coupe',
    features: ['2-door', '332 horsepower', '19/26 mpg'],
  },
  {
    id: 4,
    name: 'Sammy',
    make: 'Chevy',
    model: 'Spark',
    features: ['4-door', '98 horsepower', '38 mpg'],
  },
];

router.get('/', (req, res) => {
  res.status(200).json(cars);
});

router.get('/:id', (req, res) => {
  let car = getCars(cars, req.params.id);
  res.status(200).json(car);
});

router.post('/', (req, res) => {
  let carId = req.body.id;
  car.push(req.body);
  const car = getCars(cars, carId);
  res.status(200).json(car);
});

function getCars(arr, id) {
  let car;
  for(let i = 0; i < arr.length; i++) {
    if(id.toString() === arr[i].id.toString()) {
      car = arr[i]
    }
  }
  return car
};


module.exports = router;
