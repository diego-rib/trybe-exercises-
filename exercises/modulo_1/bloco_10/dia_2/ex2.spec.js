const { getUserName } = require('./ex2');

describe('Testa função getUserName', () => {
  it('Quando encontra o usuário pelo ID', () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toBe('Mark');
  });

  it('Quando NÃO encontra o usuário pelo ID', () => {
    expect.assertions(1);
    return expect(getUserName(7)).rejects.toEqual({ error: 'User with 7 not found.' });
  });
});
