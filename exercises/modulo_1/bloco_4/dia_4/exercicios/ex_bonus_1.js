let stringRomano = 'MMI';

numRomano = stringRomano.toUpperCase();

let romanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

let soma = 0;

for (let index = 0; index < numRomano.length; index += 1) {
  if (romanos[numRomano[index]] < romanos[numRomano[index+1]]) {
    soma += romanos[numRomano[index+1]] - romanos[numRomano[index]];
    index += 1;
  } else {
    soma += romanos[numRomano[index]];
  }
}

console.log(soma);