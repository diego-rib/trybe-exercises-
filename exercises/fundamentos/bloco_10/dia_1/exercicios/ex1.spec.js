const { decode, encode } = require('./ex1');

describe('Testes das funções encode e decode', () => {

  it('Teste se encode e decode são funções', () => {
    expect(typeof decode === 'function' && typeof encode === 'function').toEqual(true);
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('diego')).toEqual('d32g4');
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('d32g4')).toEqual('diego');
  });

  it('Função encode não troca letras que não são vogais', () => {
    expect(encode('nlddjnfdgbdsj')).toEqual('nlddjnfdgbdsj');
  });

  it('Função decode não troca letras, apenas números', () => {
    expect(decode('O peito do pé de Pedro é preto')).toEqual('O peito do pé de Pedro é preto');
  });

  it('String retornada pela função encode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('O peito do pé de Pedro é preto').length).toEqual(30);
  });

  it('String retornada pela função decode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('O p23t4 d4 pé d2 P2dr4 é pr2t4').length).toEqual(30);
  });

});
