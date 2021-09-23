const { questionInt, setDefaultOptions } = require('readline-sync');

const velocidade = () => {
  setDefaultOptions({limit: null});
  const distancia = questionInt('Qual a distancia percorrida? (m) ');
  const tempo = questionInt('Qual o tempo gasto? (s) ');
  
  const vm = distancia / tempo;
  
  console.log(`A velocidade média do carro foi ${+(vm * 3.6).toFixed(2)} km/h.`);
}

module.exports = velocidade;
