const { questionFloat, questionInt } = require('readline-sync');

const peso = questionFloat('Qual seu peso? (kg) ');
const altura = questionInt('Qual sua altura? (cm) ');

const imc = peso / (altura / 100) ** 2;

console.log(`Seu IMC é ${imc.toFixed(2)}`);

function imcSituation() {
  if (imc < 18.5) return ('Abaixo do peso (magreza)');
  if (imc < 24.9) return ('Peso normal');
  if (imc < 29.9) return ('Acima do peso (sobrepeso)');
  if (imc < 34.9) return ('Obesidade grau I');
  if (imc < 39.9) return ('Obesidade grau II');
  return ('Obesidade graus III e IV');
}
console.log(imcSituation(imc));

// | IMC                                       | Situação                  |
// | ----------------------------------------- | ------------------------- |
// | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
// | Entre 18,5 e 24,9                         | Peso normal               |
// | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
// | Entre 30,0 e 34,9                         | Obesidade grau I          |
// | Entre 35,0 e 39,9                         | Obesidade grau II         |
// | 40,0 e acima                              | Obesidade graus III e IV  |
