const { keyInSelect } = require('readline-sync');

const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');

const scripts = [imc, velocidade, sorteio];
const scriptsNames = ['imc', 'velocidade', 'sorteio'];

const option = keyInSelect(scriptsNames, 'Qual script deseja executar? ');
console.log();

if (scripts[option]) scripts[option]();
