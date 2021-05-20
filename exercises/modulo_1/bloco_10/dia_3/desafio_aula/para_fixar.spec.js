const math = require('./para_fixar.js');

describe('Testa as funções matemáticas', () => {
  describe('Testa a função subtrair para:', () => {
    it('a chamada', () => {
      math.subtrair = jest.fn();
      math.subtrair();
      expect(math.subtrair).toHaveBeenCalled();
    });
  });

  describe('Testa a função multiplicar para:', () => {
    math.multiplicar  = jest.fn().mockReturnValue(10);
    math.multiplicar();

    it('a chamada', () => {
      expect(math.multiplicar).toHaveBeenCalled();
    });
    
    it('o retorno do valor esperado', () => {
      expect(math.multiplicar()).toBe(10);
    });
  });

  describe('Testa função somar para:', () => {
    math.somar = jest.fn((a, b) => a + b);
    math.somar(1, 2);
    math.somar(5, 10);
    
    it('a chamada da função', () => {
      expect(math.somar).toHaveBeenCalled();
    });

    it('o retorno', () => {
      expect(math.somar(1, 2)).toBe(3);
      expect(math.somar(5, 10)).toBe(15);
    });

    it('os parâmetros passados', () => {
      expect(math.somar).toHaveBeenCalledWith(1, 2);
      expect(math.somar).toHaveBeenCalledWith(5, 10);
    });
  });

  describe('Testa função dividir para:', () => {
    beforeEach(() => {
      math.dividir = jest.fn().mockReturnValue(15);
      math.dividir(2);
      math.dividir(5);
    });
    
    it('a chamada da função', () => {
      expect(math.dividir).toHaveBeenCalledTimes(2);
    });

    it('o retorno do valor esperado', () => {
      expect(math.dividir(2)).toBe(15);
      expect(math.dividir(5)).toBe(15);
    });

    it('os parâmetros passados', () => {
      expect(math.dividir).toHaveBeenCalledWith(2);
      expect(math.dividir).toHaveBeenCalledWith(5);
    });
  });

  describe('Testa função subtrair com spyOn para:', () => {
    it('a chamada da função', () => {
      jest.spyOn(math, 'subtrair').mockReturnValue(20);
      math.subtrair(5, 4);
      math.subtrair(7, 1);
      expect(math.subtrair).toHaveBeenCalledTimes(3);
      expect(math.subtrair(5, 4)).toBe(20);
      expect(math.subtrair(7, 1)).toBe(20);
      math.subtrair.mockRestore();
      expect(math.subtrair()).toBe(undefined);
    });
  });
});
