let custo_produto = 250;
let valor_produto = 500;

if (custo_produto < 0 || valor_produto < 0) {
  return;
}

let impostoSobreCusto = 0.2 * custo_produto;

let valorCustoTotal = custo_produto + impostoSobreCusto;

let lucro = valor_produto - valorCustoTotal;

return (lucro * 1000);