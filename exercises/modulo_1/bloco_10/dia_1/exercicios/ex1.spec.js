const { decode, encode } = require('./ex1');

describe('Testes das funções encode e decode', () => {

  it('Teste se encode e decode são funções', () => {
    expect(true).toEqual(typeof decode === 'function' && typeof encode === 'function');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect('d32g4').toEqual(encode('diego'));
  });

})
