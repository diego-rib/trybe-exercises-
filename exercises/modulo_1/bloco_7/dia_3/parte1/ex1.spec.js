const sum = require('./ex1.js');

describe('Testes função Sum', () => {
  it('O retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it('O retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('A função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => { sum(4, '5') }).toThrowError('parameters must be numbers');
  });
});
