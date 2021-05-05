
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const appendItem = (arrayFinal, item) => {
  item.forEach(subItem => {
    arrayFinal.push(subItem);
  });
  return arrayFinal;
};

function flatten() {
  return arrays.reduce((acc, curr) => appendItem(acc, curr));
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);