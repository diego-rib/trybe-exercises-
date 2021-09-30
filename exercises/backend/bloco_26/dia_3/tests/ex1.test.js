// Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// 1.1 - Descreva todos os cenário de teste utilizando describes ;
// 1.2 - Descreva todos os testes que serão feitos utilizando its ;
// 1.3 - Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.
const { expect } = require('chai');

const ex1 = require('../ex1');

describe('Exercício 1', () => {
  describe('Recebe um número como parâmetro e retorna uma string', () => {
    it('positivo', () => {
      const resposta = ex1(5);
      expect(resposta).to.be.a('string');
      expect(resposta).to.be.equals('positivo');
    });
    
    it('negativo', () => {
      const resposta = ex1(-2);
      expect(resposta).to.be.a('string');
      expect(resposta).to.be.equals('negativo');
    });
    
    it('neutro', () => {
      const resposta = ex1(0);
      expect(resposta).to.be.a('string');
      expect(resposta).to.be.equals('neutro');
    });
  });
});
