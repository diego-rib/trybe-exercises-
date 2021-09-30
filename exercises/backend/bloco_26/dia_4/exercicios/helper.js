const fs = require('fs').promises;

async function readSimpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((rawdata) => JSON.parse(rawdata));
}

function newSimpson(content) {
  return fs.writeFile('./simpsons.json', JSON.stringify(content));
}

module.exports = { readSimpsons, newSimpson };
