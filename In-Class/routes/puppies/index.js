const router = require('express').Router();

const puppies = [
  {
    id: 1,
    name: 'Chanel',
    breed: 'maltese',
    likes: ['back rubs', 'treats'],
    dislike: ['baths', 'vet']
  },
  {
    id: 2,
    name: 'Boo',
    breed: 'maltese',
    likes: ['tummy rubs', 'all dogs'],
    dislike: ['her sister Chanel']
  },
  {
    id: 3,
    name: 'Coco',
    breed: 'chihuahua',
    likes: ['human food'],
    dislike: ['everything this']
  }
];

router.get('/', (request, response) => {
  response.status(200).json(puppies);
});

router.get('/:id', (request, response) => {
  let puppy = getPuppy(puppies, request.params.id)
  response.status(200).json(puppy);
});

router.post('/', (request, response) => {
  let puppyId = request.body.id;
  puppies.push(request.body);
  const puppy = getPuppy(puppies, puppyId);
  response.status(200).json(puppy);
});

function getPuppy(arr, id) {
  let puppy;
  for(let i = 0; i < arr.length; i++) {
    if(id.toString() === arr[i].id.toString()) {
      puppy = arr[i];
    }
  }
  return puppy;
};

module.exports = router;
