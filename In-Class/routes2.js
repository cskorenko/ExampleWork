const router= require('express').Router();

router.get('/', (request, response) => {
  response.status(200).send('My express request');
});

module.exports= router; 
