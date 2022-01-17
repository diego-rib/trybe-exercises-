const { questionInt } = require('readline-sync');

const calcFib = (n) => {
  let firstNumber = 0;
  let fib = 1;
  let nextNumber = 1;
  const fibNumbers = [];

  for (let index = 0; index < n; index += 1) {
    fib = nextNumber; // atualiza com o numero calculado previamente
    nextNumber += firstNumber; // calcula o proximo numero
    firstNumber = fib; // atualiza o numero antecessor
    fibNumbers.push(firstNumber);
  }

  console.log(fibNumbers.join(', '));
};

const fibonacci = () => {
  let number = questionInt('Quantos números da sequência de Fibonacci? ');
  while (number <= 0) {
    console.log('\nInsira um número positivo maior que 0.');
    number = questionInt('\nQuantos números da sequência de Fibonacci? ');
  };

  calcFib(number);
};

fibonacci();
