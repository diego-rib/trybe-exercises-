/*    PARTE 1    */

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
// sum(4, '5'); // A mensagem de erro é exibida corretamente
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
let array = [1, 2, 3, 4];

assert.deepStrictEqual(myRemove(array, 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove(array, 3), [1, 2, 3, 4]);
myRemove(array, 3);
assert.deepStrictEqual(array, [1, 2, 3, 4], 'O array é alterado durante a função');
assert.deepStrictEqual(myRemove(array, 5), [1, 2, 3, 4]);


// Exercicio 3
function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// Testes

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
myRemoveWithoutCopy(array, 3);
// assert.deepStrictEqual(array, [1, 2, 3, 4], 'O array é alterado durante a função'); // A mensagem de erro é exibida corretamente
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);