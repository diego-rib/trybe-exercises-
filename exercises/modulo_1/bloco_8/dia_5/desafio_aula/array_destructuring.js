const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

console.log(saudacoes[1](saudacoes[0])); // Olá

const [ola, saudar] = saudacoes;

console.log(saudar(ola));

// Produza o mesmo resultado acima, porém utilizando array destructuring