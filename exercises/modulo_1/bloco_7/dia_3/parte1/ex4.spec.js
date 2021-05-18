const { it, expect } = require('@jest/globals');
const myFizzBuzz = require('./ex4');

describe('Testes função myFizzBuzz', () => {

  it('Numero divisivel por 3 e 5 espera o retorno "fizzbuzz"', () => {
    expect('fizzbuzz').toEqual(myFizzBuzz(15));
  });

  it('Numero divisivel por 3 espera o retorno "fizz"', () => {
    expect('fizz').toEqual(myFizzBuzz(12));
  });

  it('Numero divisivel por 5 espera o retorno "buzz"', () => {
    expect('buzz').toEqual(myFizzBuzz(20));
  });

  it('Numero não divisivel por 3 e 5 e espera que ele mesmo seja retornado', () => {
    expect(8).toEqual(myFizzBuzz(8));
  });

  it('Passada uma string como parâmetro espera que retorna "false"', () => {
    expect(false).toEqual(myFizzBuzz('olá'));
  });

});
