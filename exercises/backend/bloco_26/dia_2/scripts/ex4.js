const fs = require('fs').promises;

// 4.1 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson.
fs.readFile('simpsons.json', 'utf8')
  .then((rawdata) => {
    const data = JSON.parse(rawdata);
    // data.forEach(({ id, name }) => console.log(`${id} - ${name}`));
  })
  .catch((err) => console.log(err.message));


// 4.2 - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
const infoCharacter = (searchId) => {
  return new Promise(async (resolve, reject) => {
    await fs.readFile('simpsons.json', 'utf8')
      .then((rawdata) => {
        const data = JSON.parse(rawdata);
        const character = data.find(({ id }) => Number(id) === searchId);
        if(character) resolve(character);
        reject(new Error('id não encontrado'));
      })
      .catch((err) => reject(new Error(err.message)));
  });
}

infoCharacter(2)
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));
