const myRemove = require('./ex2');

describe('Testes função myRemove', () => {

  it('A chamada myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
    let array = [1, 2, 3, 4];
    expect([1, 2, 4]).toEqual(myRemove(array, 3));
  });

  it('A chamada myRemove([1, 2, 3, 4], 3) NÃO retorna o array [1, 2, 3, 4]', () => {
    let array = [1, 2, 3, 4];
    expect([1, 2, 3, 4]).not.toEqual(myRemove(array, 3));
  });

  it('O array passado por parâmetro não sofreu alterações', () => {
    let array = [1, 2, 3, 4];
    myRemove(array, 2);
    expect([1, 2, 3, 4]).toEqual(array);
  });

  it('A chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
    let array = [1, 2, 3, 4];
    expect([1, 2, 3, 4]).toEqual(myRemove(array, 5));
  });

});
