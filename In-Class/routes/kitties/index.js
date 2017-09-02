const router= require('express').Router();

const kitties = [
{
  id: 1,
  name: "Rasputin",
  breed: "black",
  likes: ['head boops', 'laying on the couch'],
  dislike: ['hugs']
},
{
  id: 2,
  name: 'Fluffy',
  breed: 'black tabby',
  likes: ['ribbon', 'blankets'],
  dislikes: ['bath']
},
{
  id: 3,
  name: 'Solveig',
  breed: 'tuxedo',
  likes: ['snacks', 'heated bed'],
  dislikes: ['all other cats']
}
];

router.get('/', (request, response) => {
  response.status(200).json(kitties);
});

//can only do 1 will never reach a second - query params are a better use
//id is most common below and any other param will be searched through a query
router.get('/:id', (request, response) => {   // /kitties/1 or any other id number
  let kitty = getKitty(kitties, request.params.id);
  response.status(200).json(kitty);
});

router.post('/', (request, response) => {
  //take obj insert into database & db give backs the id number & then search database
  //for that obj id umber to return it
  const kittyId = request.body.id;   //added body from body parser
  kitties.push(request.body);
  const kitty= getKitty(kitties, kittyId);
  response.status(200).json(kitty);
});

function getKitty(arr, id) {
  let kitty;
  for(let i = 0; i < arr.length; i++) {
    if (id.toString() === arr[i].id.toString()) {
      kitty = arr[i];
    }
  }
  return kitty;
}


module.exports= router;
