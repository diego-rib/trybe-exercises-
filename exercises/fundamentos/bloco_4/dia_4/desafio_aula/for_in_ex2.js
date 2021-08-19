let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (carInfo in carro) {
  console.log(carInfo, carro[carInfo]);
}