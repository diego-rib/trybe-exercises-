const assert = require('assert');

const greetPeople = (people) => {
  let greeting = [];

  for (const person in people) {
    greeting.push(`Hello ${people[person]}`);
  }
  return greeting;
};

let parameter = ['Irina', 'Ashleigh', 'Elsa'];
let result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
let output = greetPeople(parameter);
assert.deepStrictEqual(output, result);

parameter = ['Diego', 'Henrique', 'Supimpa', 'Catapimbas'];
result = ['Hello Diego', 'Hello Henrique', 'Hello Supimpa', 'Hello Catapimbas'];
output = greetPeople(parameter);
assert.deepStrictEqual(output, result);
