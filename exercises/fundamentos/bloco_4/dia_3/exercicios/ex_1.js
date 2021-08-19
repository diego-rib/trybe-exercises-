let n = 5;
let linha = '';
let index;

for (index = 0; index < n; index += 1) {
  linha += '*';
}

for (index = 0; index < n; index += 1) {
  console.log(linha);
}