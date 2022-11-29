const fibonacci = function (num) {
  if (num < 0) {return 'OOPS';}
  exFib = 0;
  fib = 1;
  for (i = 1; i < num; i++) {
    curFib = fib;
    fib = fib + exFib;
    exFib = curFib;
  } return fib;
};

// Do not edit below this line
module.exports = fibonacci;
