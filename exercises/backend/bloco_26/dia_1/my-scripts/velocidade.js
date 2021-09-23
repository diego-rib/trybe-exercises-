const { questionInt } = require('readline-sync');

const distancia = questionInt('Qual a distancia percorrida? (m) ');
const tempo = questionInt('Qual o tempo gasto? (s) ');

const vm = distancia / tempo;

console.log(`A velocidade média do carro foi ${+(vm * 3.6).toFixed(2)} km/h.`);
