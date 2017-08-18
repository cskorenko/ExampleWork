const math = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  exponents
};

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division (a,b) {
  if (b === 0) {
    return "Error";
  } else {
    return a / b;
  }
}

function modulo (a, b) {
  if (b === 0) {
    return "Error";
  } else {
    return a % b;
  }
}

function exponents(a, b) {
    return Math.pow(a, b);
}

module.exports= math;
