const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderingOdds = (oddsAndEvens) => oddsAndEvens.sort((a, b) => a - b).join(', ');

console.log(`Os números ${orderingOdds(oddsAndEvens)} se encontram ordenados de forma crescente!`);
