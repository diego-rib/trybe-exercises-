let salarioBruto = 3000;
let valorINSS;
let valorIR;

if (salarioBruto <= 1556.94) {
  valorINSS = (0.08 * salarioBruto);
} else if (salarioBruto <= 2594.92) {
  valorINSS = (0.09 * salarioBruto);
} else if (salarioBruto <= 5189.82) {
  valorINSS = (0.11 * salarioBruto);
} else {
  valorINSS = 570.88;
}

let salarioBase = salarioBruto - valorINSS;
console.log(salarioBase);

if (salarioBase <= 1903.98) {
  valorIR = 0;
} else if (salarioBase <= 2826.65) {
  valorIR = (0.075 * salarioBase - 142.80);
} else if (salarioBase <= 3751.05) {
  valorIR = (0.15 * salarioBase - 354.80);
} else if (salarioBase <= 4664.68) {
  valorIR = (0.225 * salarioBase - 636.13);
} else {
  valorIR = (0.275 * salarioBase - 869.36);
}

let salarioLiquido = salarioBase - valorIR;

console.log(salarioLiquido);