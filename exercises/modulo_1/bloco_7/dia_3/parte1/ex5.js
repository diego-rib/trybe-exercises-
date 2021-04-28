const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  title: 'My Title',
  description: 'My Description',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// Testes

assert.deepStrictEqual(obj1, obj2, 'São diferentes'); // São idênticos

assert.deepStrictEqual(obj1, obj3, 'São diferentes'); // São diferentes

assert.deepStrictEqual(obj2, obj3, 'São diferentes'); // São diferentes
