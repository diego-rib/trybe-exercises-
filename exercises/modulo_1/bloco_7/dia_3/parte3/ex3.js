const assert = require('assert');

const greaterThanTen = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

let parameter = [4, 10, 32, 9, 21];
let result = [32, 21];
let output = greaterThanTen(parameter);
assert.deepStrictEqual(output, result);

parameter = [4, 10, 1, 9, 0];
result = [];
output = greaterThanTen(parameter);
assert.deepStrictEqual(output, result);

parameter = [11, 12, 13, 14, 2039];
result = [11, 12, 13, 14, 2039];
output = greaterThanTen(parameter);
assert.deepStrictEqual(output, result);
