let valorA = 51;
let valorB = 12;
let valorC = 23;

if (valorA > valorB) {
  if (valorA > valorC) {
    return valorA;
  } else {
    return valorC;
  }
} else if (valorB > valorA) {
  if (valorB > valorC) {
    return valorB;
  } else {
    return valorC;
  }
}
