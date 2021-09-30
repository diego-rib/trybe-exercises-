// Exercício 2 : Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu.

const ex1 = (number) => {
  if (typeof number !== 'number') return 'o valor deve ser um número';
  if (number === 0) return 'neutro';
  if (number > 0) return 'positivo';
  return 'negativo';
};

module.exports = ex1;
