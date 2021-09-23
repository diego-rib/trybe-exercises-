const calcImc = (peso, altura) => peso / (altura) ** 2;

const peso = 50;
const altura = 1.65;

console.log(`Seu IMC é ${calcImc(peso, altura)}`);
