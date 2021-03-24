let nota = 70;
let estado_atual = "";

if (nota >= 80) {
  estado_atual = "aprovada";
} else if (nota >= 60) {
  estado_atual = "lista";
} else {
  estado_atual = "reprovada";
}

switch (estado_atual) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;

  case "lista":
    console.log("Você está na nossa lista de espera");
    break;

  case "reprovada":
    console.log("Você foi reprovada(o)");
    break;
      
  default:
    console.log("Não se aplica");
}