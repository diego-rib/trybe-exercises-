const { questionFloat, questionInt } = require('readline-sync');

const peso = questionFloat('Qual seu peso? (kg) ');
const altura = questionInt('Qual sua altura? (cm) ');

const imc = peso / (altura / 100) ** 2;

console.log(`Seu IMC é ${imc.toFixed(2)}`);
