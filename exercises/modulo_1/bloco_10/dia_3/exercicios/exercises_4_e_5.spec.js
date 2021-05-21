const strings = require('./exercises_4_e_5');

describe('Exercicio 4', () => {
  describe('Testa função uppercase para:', () => {
    strings.uppercase = jest.spyOn(strings, 'uppercase')
      .mockImplementation((str) => str ? str.toLowerCase() : false);

    it('chamada da função', () => {
      strings.uppercase();
      expect(strings.uppercase).toHaveBeenCalled();
    });
  
    it('retorna a string em lowerCase', () => {
      expect(strings.uppercase('DIEGO')).toMatch('diego');
    });
  
    it('chamada sem parametros retorna false', () => {
      expect(strings.uppercase()).toBe(false);
    });
  });
  
  describe('Testa função firstLetter para:', () => {
    strings.firstLetter = jest.fn((str) => str ? str[str.length - 1] : false);
  
    it('chamada da função', () => {
      strings.firstLetter();
      expect(strings.firstLetter).toHaveBeenCalled();
    });
  
    it('retorna o primeiro caractere da string', () => {
      expect(strings.firstLetter('Diego')).toMatch('o');
    });
  
    it('chamada sem parametros retorna false', () => {
      expect(strings.firstLetter()).toBe(false);
    });
  });

  describe('Testa função concatStrings para:', () => {
    strings.concatStrings = jest.fn((str1 = '', str2 = '', str3 = '') => `${str1}${str2}${str3}`);
    const params = ['Diego ', 'Henrique ', 'Ribeiro'];
    const result = 'Diego Henrique Ribeiro';
  
    it('chamada da função', () => {
      strings.concatStrings();
      expect(strings.concatStrings).toHaveBeenCalled();
    });
  
    it('retorna as strings concatenadas', () => {
      expect(strings.concatStrings(...params)).toMatch(result);
    });
  
    it('chamada sem parametros retorna string vazia', () => {
      expect(strings.concatStrings()).toBe('');
    });
  });
});

describe('Exercicio 5', () => {
  describe('Primeira implementação da função uppercase que testa:', () => {
    it('chamada da função', () => {
      strings.uppercase();
      expect(strings.uppercase).toHaveBeenCalled();
    });
  
    it('retorna a string em lowerCase', () => {
      expect(strings.uppercase('DIEGO')).toMatch('diego');
    });
  
    it('chamada sem parametros retorna false', () => {
      expect(strings.uppercase()).toBe(false);
    });
  });

  describe('Restaura função uppercase', () => {
    it('Testa ela', () => {
      strings.uppercase.mockRestore();
      expect(strings.uppercase('diego')).toMatch('DIEGO');
    });
  });
});
