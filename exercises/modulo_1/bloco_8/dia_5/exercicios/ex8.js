const assert = require('assert');

const greet = (nome, saudacao = 'Hi') => {
  return `${saudacao} ${nome}`;
};

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');