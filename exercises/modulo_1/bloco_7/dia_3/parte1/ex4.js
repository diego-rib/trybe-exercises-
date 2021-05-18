const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

module.exports = myFizzBuzz;

// Testes

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');

assert.strictEqual(myFizzBuzz(12), 'fizz');

assert.strictEqual(myFizzBuzz(20), 'buzz');

assert.strictEqual(myFizzBuzz(8), 8);

assert.strictEqual(myFizzBuzz('olá'), false);
