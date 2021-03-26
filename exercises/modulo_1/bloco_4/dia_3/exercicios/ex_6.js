let numero = 113;
let primeNumber = true;

for (let index = 2; index <= numero/2; index += 1) {
  if (numero % index === 0) {
    primeNumber = false;
  }
}

console.log('O número é primo ?', primeNumber);