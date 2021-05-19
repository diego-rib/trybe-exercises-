const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// Testes

assert.strictEqual(sum(4, 5), 9);

assert.strictEqual(sum(0, 0), 0);

// sum(4, '5'); // A mensagem de erro é exibida corretamente

assert.throws(
  () => {
    sum(4, '5');
  },
  /^Error: parameters must be numbers$/
);

module.exports = sum;