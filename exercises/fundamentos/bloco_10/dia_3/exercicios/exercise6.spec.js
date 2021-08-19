let dogImage = require('./exercise6');

describe('Testa função dogImage', () => {
  it('Caso de sucesso', async () => {
    dogImage = jest.fn().mockResolvedValue('request success');
    return expect(dogImage()).resolves.toMatch('request success');
  });

  it('Caso de falha', async () => {
    dogImage = jest.fn().mockRejectedValue('request failed');
    return expect(dogImage()).rejects.toMatch('request failed');
  });
});
