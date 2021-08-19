const assert = require('assert');

const removeVowels = (word) => {
  if (typeof(word) !== 'string') {
    throw Error ('A função só aceita parametros do tipo string');
  }
  const characters = word.split('');
  const results = [];
  let num = 1;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(num);
      num += 1;
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};


let parameter = 'Dayane';
let result = 'D1y2n3';
let output = removeVowels(parameter);
assert.strictEqual(output, result);

parameter = 'Diego';
result = 'D12g3';
output = removeVowels(parameter);
assert.strictEqual(output, result);

parameter = 'xablau';
result = 'x1bl23';
output = removeVowels(parameter);
assert.strictEqual(output, result);

assert.throws(
  () => {
    removeVowels(25);
  }
);

assert.throws(
  () => {
    removeVowels([]);
  }
);

assert.throws(
  () => {
    removeVowels({});
  }
);
