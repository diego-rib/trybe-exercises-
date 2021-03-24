let nota = 92;

switch (nota) {
  case nota < 100 && nota >= 90:
    return 'A';
    break;
  case nota >= 80:
    return 'B';
    break;
  case nota >= 70:
    return 'C';
    break;
  case nota >= 60:
    return 'D';
    break;
  case nota >= 50:
    return 'E';
    break;
  case nota < 50:
    return 'F';
    break;
  default:
    return 'Nota inválida';
}