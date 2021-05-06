const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

console.log(saudacoes[1](saudacoes[0])); // Olá

const [ola, saudar] = saudacoes;

console.log(saudar(ola));

// Produza o mesmo resultado acima, porém utilizando array destructuring

// <-------------------------------------------------------------------->

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
let aux = [comida, animal, bebida];

[ animal, bebida, comida ] = aux;

console.log(comida, animal, bebida); // arroz gato água