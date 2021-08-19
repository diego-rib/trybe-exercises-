const assert = require('assert');

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

let parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
let result = [5, 6];
let output = secondThirdSmallest(parameter);
assert.deepStrictEqual(output, result);

parameter = [54, 12, 42, 33, 97, -2, 25, 39, -9];
result = [-2, 12];
output = secondThirdSmallest(parameter);
assert.deepStrictEqual(output, result);
