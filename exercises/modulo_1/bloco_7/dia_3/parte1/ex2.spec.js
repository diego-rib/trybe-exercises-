const myRemove = require('./ex2');

describe('Testes função myRemove', () => {

  it('A chamada myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
    let array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  });

  it('A chamada myRemove([1, 2, 3, 4], 3) NÃO retorna o array [1, 2, 3, 4]', () => {
    let array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('O array passado por parâmetro não sofreu alterações', () => {
    let array = [1, 2, 3, 4];
    myRemove(array, 2);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('A chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
    let array = [1, 2, 3, 4];
    expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
  });

});
