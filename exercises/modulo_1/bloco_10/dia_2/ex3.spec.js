const { getUserName } = require('./ex2');

describe('Testa função getUserName', () => {
  it('Quando encontra o usuário pelo ID', async () => {
    expect.assertions(1);
    const result = await getUserName(4);
    expect(result).toBe('Mark');
  });

  it('Quando NÃO encontra o usuário pelo ID', async () => {
    expect.assertions(1);
    try {
      await getUserName(7);
    } catch(error) {
      expect(error).toEqual({ error: 'User with 7 not found.' });
    }
  });
});
