const checkDrawNumbers = (num1, num2) => num1 === num2;

const draw = (playerNumber, checkDrawNumbers) => {
  const winnerNumber = Math.ceil(Math.random() * 5);
  if (checkDrawNumbers(playerNumber, winnerNumber)) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}
