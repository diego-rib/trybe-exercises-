const { keyInSelect } = require('readline-sync');

const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');
const fatorial = require('./fatorial');
const fibonacci = require('./fibonacci');

const scripts = [imc, velocidade, sorteio, fatorial, fibonacci];
const scriptsNames = scripts.reduce((acc, value) => [...acc, value.name], []);

const option = keyInSelect(scriptsNames, 'Qual script deseja executar? ');
console.log();

if (scripts[option]) scripts[option]();
else console.log('bye bye\n');
