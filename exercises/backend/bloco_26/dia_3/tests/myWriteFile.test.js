const { expect } = require('chai');

const myWriteFile = require('../myWriteFile');

describe('Testa a função myWriteFile', () => {
  describe('a resposta é', () => {
    const retorno = myWriteFile('teste.txt', 'A turma 11 é 10!');
    it('uma string', () => {
      expect(retorno).to.be.a('string');
    });

    it('igual a \'Arquivo escrito com sucesso\'', () => {
      expect(retorno).to.be.equals('Arquivo escrito com sucesso');
    });
  });
});
