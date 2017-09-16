const router = require('express').Router();

const exampleArray = [
  {
    id: 1,
    prop: 'Hello World'
  },
  {
    id: 2,
    prop: "Goodbye World"
  }
]


router.get('/', (req, res) => {
  res.status(200).json(exampleArray);
});

router.get('/:id', (req, res) => {
  let example = getExample(exampleArray, req.params.id);
  res.status(200).json(example);
});

router.post('/', (req, res) => {
  let exampleProp = req.body.prop;
  let example = reverseString(exampleProp);
  let object = {
    id : 3,
    prop : example
  };
  exampleArray.push(object);
  res.status(200).json(example);
});

router.put('/:id', (req, res) => {
  const example = updateExample(exampleArray, req.body, req.params.id);
  res.status(200).json(example);
});

function getExample (arr, id) {
  let example;
  for(let i = 0; i < exampleArray.length; i++) {
    if(id.toString() === arr[i].id.toString()) {
      example = arr[i];
    }
  }
  return example;
}

function reverseString(inputString) {
  let stringArray = inputString.split('');
  let reversedStringArray = [];

  for (let i = stringArray.length - 1; i >= 0; i--) {
    reversedStringArray.push(stringArray[i]);
  }

  let reversedString = reversedStringArray.join('');
  return reversedString;
}

function updateExample (arr, newExample, id) {
  let example;
  for (let i = 0; i < arr.length; i++) {
    if (id.toString() === arr[i].id.toString()) {
      arr[i].prop = newExample.prop;
      example = arr[i];
    }
  }
  return example;
}

module.exports = router;
