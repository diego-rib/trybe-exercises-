let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidade_de_impares = 0;

for (let num of numbers) {
  if (num % 2 !== 0) {
    quantidade_de_impares += 1;
  }
}

if (quantidade_de_impares > 0) {
  console.log(quantidade_de_impares);
} else {
  console.log('nenhum valor ímpar encontrado');
}