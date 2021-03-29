let n = 7;
let linhas = [];
let index;
let espacoInicial = Math.ceil(n/2);
let espacoFinal = Math.ceil(n/2);

for (index = 1; index <= n; index += 1) {
  let linha = '';
  if (index % 2 !== 0) {
    for (let secondIndex = 1; secondIndex <= n; secondIndex += 1) {
      if (index === n) {
        linha += '*';
      } else {
        if (secondIndex === espacoFinal || secondIndex === espacoInicial) {
          linha += '*';
        } else {
          linha += ' ';
        }
      }
    }
    espacoInicial -= 1;
    espacoFinal += 1;
    linhas.push(linha);
  }
}

for (let linha of linhas) {
  console.log(linha);
}