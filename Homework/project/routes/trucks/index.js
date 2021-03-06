const router = require('express').Router();

const trucks = [
  {
    id: 1,
    name: 'Manny',
    make: 'Ford',
    model: 'F-150',
    features: ['2-door', '375 horsepower', '15/19 mpg'],
  },
  {
    id: 2,
    name: 'The Rock',
    make: 'GMC',
    model: 'Sierra',
    features: ['4-door', '445 horsepower', '25 mpg'],
  },
  {
    id: 3,
    name: 'Big Mac',
    make: 'Nissan',
    model: 'Frontier',
    features: ['4-door', '152 horsepower', '19/23 mpg'],
  },
  {
    id: 4,
    name: 'Denver',
    make: 'Chevy',
    model: 'Colorado',
    features: ['4-door', '308 horsepower', '30 mpg'],
  },
];

router.get('/', (req, res) => {
  res.status(200).json(trucks);
});

router.get('/:id', (req, res) => {
  let truck = getTrucks(trucks, req.params.id);
  res.status(200).json(truck);
});

router.post('/', (req, res) => {
  let truckId = req.body.id;
  truck.push(req.body);
  const car = getTrucks(trucks, truckId);
  res.status(200).json(truck);
});

function getTrucks(arr, id){
  let truck;
  for(let i = 0; i < arr.length; i++) {
    if(id.toString() === arr[i].id.toString()) {
      truck = arr[i];
    }
  }
  return truck;
};

module.exports = router;
