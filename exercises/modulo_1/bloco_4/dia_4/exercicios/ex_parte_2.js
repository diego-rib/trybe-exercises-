// 1 - Função que verifica palíndromos
function verificaPalindrome(word) {
  let palindrome = true;
  let revIndex = word.length-1;
  for (let index = 0; index <= revIndex; index += 1) {
    if (word[index] !== word[revIndex]) {
      palindrome = false;
    }
    revIndex -= 1;
  }
  return palindrome;
}

// 2 - Função que retorna o índice do maior número em um array
function checkHigherIndex (numbers) {
  let higher = numbers[0];
  let higherIndex = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higher) {
      higherIndex = index;
    }
  }
  return higherIndex;
}

// 3 - Função que retorna o índice do menor número em um array
function checkSmallerIndex (numbers) {
  let smaller = numbers[0];
  let smallerIndex = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < smaller) {
      smallerIndex = index;
    }
  }
  return smallerIndex;
}

// 4 - Função que retorna o nome com a maior quantidade de caracteres
function checkNameSize (names) {
  let biggestName = names[0];
  for (let index = 0; index < names.length; index += 1) {
    if (biggestName.length < names[index]) {
      biggestName = names[index];
    }
  }
  return biggestName;
}
