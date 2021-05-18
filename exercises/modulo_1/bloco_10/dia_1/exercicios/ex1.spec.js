const { decode, encode } = require('./ex1');

describe('Testes das funções encode e decode', () => {

  it('Teste se encode e decode são funções', () => {
    expect(true).toEqual(typeof decode === 'function' && typeof encode === 'function');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect('d32g4').toEqual(encode('diego'));
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect('diego').toEqual(decode('d32g4'));
  });

  it('Função encode não troca letras que não são vogais', () => {
    expect('nlddjnfdgbdsj').toEqual(encode('nlddjnfdgbdsj'));
  });

  it('Função decode não troca letras, apenas números', () => {
    expect('O peito do pé de Pedro é preto').toEqual(decode('O peito do pé de Pedro é preto'));
  });

  it('String retornada pela função encode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(30).toEqual(encode('O peito do pé de Pedro é preto').length);
  });

  it('String retornada pela função decode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(30).toEqual(decode('O p23t4 d4 pé d2 P2dr4 é pr2t4').length);
  });

});
