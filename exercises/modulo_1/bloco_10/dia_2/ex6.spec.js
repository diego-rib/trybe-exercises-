const { getAnimal, getAnimalsByAge } = require('./ex6');

// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect.assertions(1);
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existem animais com a idade procurada', () => {
    it('Retorna uma lista com os animais', async () => {
      expect.assertions(1);
      return expect(getAnimalsByAge(1)).resolves.toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
    });
  });

  describe('Quando não existem animais com a idade procurada', () => {
    it('Retorna um erro', async () => {
      expect.assertions(1);
      return expect(getAnimalsByAge(8)).rejects.toEqual('Nenhum animal com essa idade encontrado.');
    });
  });
});
