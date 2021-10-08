const { keyInSelect } = require('readline-sync');

const scripts = ['./imc', './velocidade', './sorteio', './fatorial', './fibonacci'];
const scriptsNames = scripts.reduce((acc, script) => [...acc, script.replace('./', '')], []);

const option = keyInSelect(scriptsNames, 'Qual script deseja executar? ');
console.log();

const script = scripts[option];

if (script) require(script);

console.log('\nbye bye\n');
