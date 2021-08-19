let n = 5;
let linhas = [];
let index;

for (index = 0; index < n; index += 1) {
  let linha = '';
  for (let secondIndex = 0; secondIndex <= index; secondIndex += 1) {
    linha += '*';
  }
  linhas.push(linha);
}

for (index = 0; index < n; index += 1) {
  console.log(linhas[index]);
}