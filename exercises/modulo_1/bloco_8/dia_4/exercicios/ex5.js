
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.join('').toLowerCase().split('').reduce((acc, curr) => (curr.includes('a') ? acc + 1 : acc), 0);
}

assert.deepStrictEqual(containsA(), 20);