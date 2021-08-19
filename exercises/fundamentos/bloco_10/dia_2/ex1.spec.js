const { uppercase } = require('./ex1');

describe('Testa função uppercase', () => {
  it('Transforma as letras de uma palavra em maiúsculas', (done) => {
    uppercase('teste', (result) => {
      expect(result).toMatch(/TESTE/);
      done();
    });
  });
});
