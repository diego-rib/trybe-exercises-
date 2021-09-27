const fs = require('fs').promises;

// 4.1 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson.
fs.readFile('simpsons.json', 'utf8')
  .then((rawdata) => {
    const data = JSON.parse(rawdata);
    // data.forEach(({ id, name }) => console.log(`${id} - ${name}`));
  })
  .catch((err) => console.log(err.message));
