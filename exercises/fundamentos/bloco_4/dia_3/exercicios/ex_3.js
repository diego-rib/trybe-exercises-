let n = 5;
let linhas = [];

for (let index = 0; index < n; index += 1) {
  let linha = '';
  for (let secondIndex = 0; secondIndex < n; secondIndex += 1) {
    if (secondIndex >= (n - (index+1))) {
      linha += '*';
    } else {
      linha += ' ';
    }
  }
  linhas.push(linha);
}

for (let index = 0; index < n; index += 1) {
  console.log(linhas[index]);
}