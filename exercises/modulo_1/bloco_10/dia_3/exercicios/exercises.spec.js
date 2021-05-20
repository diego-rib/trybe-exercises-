let { randomNumber } = require('./exercises');

describe('Testa a função randomNumber', () => {

  describe('Exercicio 1 testando a chamada, o retorno e quantas vezes foi chamada', () => {
    beforeEach(() => {
      randomNumber = jest.fn().mockReturnValue(10);
    });

    it('a chamada', () => {
      randomNumber();
      expect(randomNumber).toHaveBeenCalled();
    });

    it('retorno', () => {
      expect(randomNumber()).toBe(10);
    });

    it('quantas vezes foi chamada', () => {
      randomNumber();
      randomNumber();
      expect(randomNumber).toHaveBeenCalledTimes(2);
      randomNumber();
      expect(randomNumber).toHaveBeenCalledTimes(3);
    });
  });

  
});
