const fs = require('fs');

const myWriteFile = (fileName, content) => {
  fs.writeFileSync(`./${fileName}`, content);
  return 'Arquivo escrito com sucesso';
}

module.exports = myWriteFile;
