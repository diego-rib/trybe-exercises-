let anguloA = 60;
let anguloB = 90;
let anguloC = 40;
if (anguloA < 0 || anguloB < 0 || anguloC < 0) {
  return 'Numero inserido invalido';
} else {
  if (anguloA + anguloB + anguloC !== 180) {
    return false;
  } else {
    return true;
  }
}