const { decode, encode } = require('./ex1');

describe('Testes das funções encode e decode', () => {

  it('Teste se encode e decode são funções', () => {
    expect(true).toEqual(typeof decode === 'function' && typeof encode === 'function');
  });

})
