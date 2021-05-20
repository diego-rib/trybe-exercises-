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

  describe('Exercicio 2 função modificada', () => {
    beforeEach(() => {
      randomNumber = jest.fn((a, b) => a / b);
    });

    it('a chamada', () => {
      randomNumber();
      expect(randomNumber).toHaveBeenCalled();
    });

    it('retorno', () => {
      expect(randomNumber(2, 1)).toBe(2);
    });

    it('quantas vezes foi chamada', () => {
      randomNumber();
      randomNumber();
      expect(randomNumber).toHaveBeenCalledTimes(2);
      randomNumber();
      expect(randomNumber).toHaveBeenCalledTimes(3);
    });

    it('parametros que foi chamada [(10, 2), (25, 5)]', () => {
      randomNumber(10, 2);
      randomNumber(25, 5);
      expect(randomNumber).toHaveBeenCalledWith(10, 2);
      expect(randomNumber).toHaveBeenCalledWith(25, 5);
    });
  });
});
