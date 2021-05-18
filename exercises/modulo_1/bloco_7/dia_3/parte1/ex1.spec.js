const sum = require('./ex1.js');

describe('Testes função Sum', () => {
  it('O retorno de sum(4, 5) é 9', () => {
    expect(9).toEqual(sum(4, 5));
  });
  it('O retorno de sum(0, 0) é 0', () => {
    expect(0).toEqual(sum(0, 0));
  });
  it('A função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => { sum(4, '5') }).toThrowError();
  });
});
