const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;	
};

const sum = function(a) {
	let sum = 0;
	for (i of a) {
		sum += i;
	}
	return sum;
};

const multiply = function(a) {
	let mult = 1;
	for (i of a) {
		mult *= i;
	} return mult;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let facto = 1;
	for (i = 1; i <= a; i++){
		facto *= i;
	}
	return facto;
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
