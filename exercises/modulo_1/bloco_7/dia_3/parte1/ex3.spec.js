const myRemoveWithoutCopy = require('./ex3');

describe('Testes função myRemoveWithoutCopy', () => {

  it('A chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
    let array = [1, 2, 3, 4];
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy(array, 3));
  });

  it('A chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) NÃO retorna o array [1, 2, 3, 4]', () => {
    let array = [1, 2, 3, 4];
    expect([1, 2, 3, 4]).not.toEqual(myRemoveWithoutCopy(array, 3));
  });

  it('Verifica se o array passado por parâmetro sofreu alterações', () => {
    let array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 3);
    expect([1, 2, 4]).toEqual(array);
  });

  it('A chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
    let array = [1, 2, 3, 4];
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy(array, 5));
  });

});
