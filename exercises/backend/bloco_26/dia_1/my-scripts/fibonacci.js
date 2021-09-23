const { questionInt } = require('readline-sync');

const calcFib = (n) => {
  let previousNumber = 0;
  let fib = 1;
  let nextNumber = 1;

  for (let index = 2; index <= n; index += 1) {
    fib = nextNumber; // atualiza com o numero calculado previamente
    nextNumber += previousNumber; // calcula o proximo numero
    previousNumber = fib; // atualiza o numero antecessor
  }
  return fib;
};

const fibonacci = () => {
  let number = questionInt('Número a ser calculado o fibonacci: ');
  while (number <= 0) {
    console.log('\nInsira um número positivo.');
    number = questionInt('\nNúmero a ser calculado o fibonacci: ');
  };

  console.log(`\nFibonacci de ${number} é ${calcFib(number)}\n`);
};

module.exports = fibonacci;
