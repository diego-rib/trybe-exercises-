const { it, expect } = require('@jest/globals');
const myFizzBuzz = require('./ex4');

describe('Testes função myFizzBuzz', () => {

  it('Numero divisivel por 3 e 5 espera o retorno "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('Numero divisivel por 3 espera o retorno "fizz"', () => {
    expect(myFizzBuzz(12)).toEqual('fizz');
  });

  it('Numero divisivel por 5 espera o retorno "buzz"', () => {
    expect(myFizzBuzz(20)).toEqual('buzz');
  });

  it('Numero não divisivel por 3 e 5 e espera que ele mesmo seja retornado', () => {
    expect(myFizzBuzz(8)).toEqual(8);
  });

  it('Passada uma string como parâmetro espera que retorna "false"', () => {
    expect(myFizzBuzz('olá')).toEqual(false);
  });

});
