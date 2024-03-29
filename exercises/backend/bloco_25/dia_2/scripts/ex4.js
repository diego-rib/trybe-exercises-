const fs = require('fs').promises;

function myReadFiles(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8')
      .then((rawdata) => resolve(JSON.parse(rawdata)))
      .catch((err) => reject(err.message));
  });
}

// 4.1 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson.
const readAllFiles = (file) => {
  myReadFiles(file)
    .then((data) => data.forEach(({ id, name }) => console.log(`${id} - ${name}`)))
    .catch((err) => console.log(err.message));
}

// readAllFiles('simpsons.json');


// 4.2 - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
const infoCharacter = (searchId) => {
  return new Promise(async (resolve, reject) => {
    await myReadFiles('simpsons.json')
      .then((data) => {
        const character = data.find(({ id }) => Number(id) === searchId);
        if(character) resolve(character);
        reject(new Error('id não encontrado'));
      })
      .catch((err) => reject(new Error(err.message)));
  });
}

// infoCharacter(2)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));


// 4.3 - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
const alterFile = async () => {
  await fs.readFile('simpsons.json', 'utf8')
  .then((rawdata) => JSON.parse(rawdata))
  .then((data) => {
    const filtered = data.filter(({ id }) => Number(id) !== 10 && Number(id) !== 6);
    fs.writeFile('simpsons.json', JSON.stringify(filtered, null, 2))
      .then(() => console.log('Arquivo escrito com sucesso'))
      .catch((err) => console.log(err.message));
  });

  myReadFiles('simpsons.json')
    .then((data) => data.forEach(({ id, name }) => console.log(`${id} - ${name}`)))
    .catch((err) => console.log(err.message));
}

// alterFile();


// 4.4 - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
const createFamilyFile = () => {
  return new Promise((resolve, reject) => {
    myReadFiles('simpsons.json')
      .then((data) => {
        const filtered = data.slice(0, 4);
        fs.writeFile('simpsonFamily.json', JSON.stringify(filtered, null, 2))
          .then(() => resolve('Arquivo escrito com sucesso'))
          .catch((err) => reject(new Error(err.message)));
      })
      .catch((err) => reject(new Error(err.message)));
  })
}

// createFamilyFile()
//   .then(() => readAllFiles('simpsonFamily.json'))
//   .catch((err) => console.log(err.message));


// 4.5 - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
const alterFamilyFile = async () => {
  try {
    const simpsons = await myReadFiles('simpsons.json');
    const nelson = simpsons.find(({ name }) => name.match(/Nelson/));
    const simpsonFamily = await myReadFiles('simpsonFamily.json');
    await fs.writeFile('simpsonFamily.json', JSON.stringify([...simpsonFamily, nelson], null, 2));
    readAllFiles('simpsonFamily.json');
  } catch(err) {
    console.log(err.message);
  }
}

// alterFamilyFile();


// 4.6 - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
const switchCharFamilyFile = async () => {
  try {
    const simpsons = await myReadFiles('simpsons.json');
    const maggie = simpsons.find(({ name }) => name.match(/Maggie/));
    const simpsonFamily = await myReadFiles('simpsonFamily.json');
    const filtered = simpsonFamily.map((char) => {
      if (char.name.match(/Nelson/)) return maggie;
      return char;
    });
    await fs.writeFile('simpsonFamily.json', JSON.stringify(filtered, null, 2));
    readAllFiles('simpsonFamily.json');
  } catch(err) {
    console.log(err.message);
  }
}

// switchCharFamilyFile();
