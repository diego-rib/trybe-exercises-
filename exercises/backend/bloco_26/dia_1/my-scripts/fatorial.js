const { questionInt } = require('readline-sync');

const calcFat = (n) => {
  if (n <= 1) return 1;
  return n * calcFat(n - 1);
}

const fatorial = () => {
  let number = questionInt('Número a ser calculado o fatorial: ');
  while (number < 0) {
    console.log('\nInsira um número positivo.');
    number = questionInt('\nNúmero a ser calculado o fatorial: ');
  };

  console.log(`\nFatorial de ${number} é ${calcFat(number)}\n`);
}

module.exports = fatorial;
