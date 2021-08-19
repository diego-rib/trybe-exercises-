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


// <-------------------------------------------------------------------->


let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

numerosPares = numerosPares.filter(num => num % 2 === 0);

console.log(numerosPares); // [6, 8, 10, 12]
