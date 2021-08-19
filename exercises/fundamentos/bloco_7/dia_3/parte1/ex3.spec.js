const myRemoveWithoutCopy = require('./ex3');

describe('Testes função myRemoveWithoutCopy', () => {

  it('A chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
    let array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4]);
  });

  it('A chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) NÃO retorna o array [1, 2, 3, 4]', () => {
    let array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verifica se o array passado por parâmetro sofreu alterações', () => {
    let array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 3);
    expect(array).toEqual([1, 2, 4]);
  });

  it('A chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
    let array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 5)).toEqual([1, 2, 3, 4]);
  });

});
