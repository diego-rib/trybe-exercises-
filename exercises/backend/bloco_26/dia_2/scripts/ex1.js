// 1 - Crie uma função que recebe três parâmetros retorna uma Promise .

const main = (a, b, c) => {
  return new Promise((resolve, reject) => {
    // 1.1 - Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error('Informe apenas números'));
    }

    // 1.2 - Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
    const resultado = (a + b) * c ;

    // 1.3 - Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
    if (resultado < 50) reject(new Error('Valor muito baixo'));

    // 1.4 - Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
    resolve(resultado);
  });
} 

main('15', 10, 2)
  .then((result) => console.log(`Resultado foi: ${result}`))
  .catch((err) => console.log(err.message));
