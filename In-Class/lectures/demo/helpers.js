module.exports = {
  validatePuppy
}

function validatePuppy(puppy)  {
  if(!puppy.name || !puppy.breed || !puppy.age || !puppy.likes || !puppy.displikes) {
    return false;
  }

  return true;
}
