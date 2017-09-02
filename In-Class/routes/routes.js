const router = require('express').Router();

router.get('/', (request, response) => {
  response.status(200).send('My Express App Router'); //200 is response status
});

module.exports= router;
