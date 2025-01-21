const add = function(numberOne,numberTwo) {
	return numberOne + numberTwo;
};

const subtract = function(numberOne,numberTwo) {
	return numberOne - numberTwo;
};

const sum = function(array) {
  if (array.length === 0) {
    return 0;
  }
	const arrSum = array.reduce((total,currentNum) => total + currentNum);
  return arrSum;
};

const multiply = function(array) {
  arrMult = array.reduce((total,currentNum) => total * currentNum);
  return arrMult;
};

const power = function(numberOne,numberTwo) {
  return numberOne ** numberTwo;
};

const factorial = function(factNum) {
	const factArr = [];
  if (factNum === 0) {
    return 1;
  }
  for (i = 1; i <= factNum; i++) {
    factArr.push(i);
  }
  factArr.reverse();
  return factArr.reduce((total, currentNum) => total * currentNum);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
