// Exercicio 1
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
// sum(4, '5');
assert.throws(
  () => {
    sum(4, '5');
  },
  /^Error: parameters must be numbers$/
);

// Exercicio 2
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// Testes
const array = [1, 2, 3, 4];
const arrayBackup = array;

assert.deepStrictEqual(myRemove(array, 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove(array, 3), [1, 2, 3, 4]);
assert.strictEqual(array, arrayBackup);
assert.deepStrictEqual(myRemove(array, 5), [1, 2, 3, 4];
