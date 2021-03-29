function verificaPalindrome(word) {
  let palindrome = true;
  let indexInverso = word.length-1;
  for (let index = 0; index <= indexInverso; index += 1) {
    if (word[index] !== word[indexInverso]) {
      palindrome = false;
    }
    indexInverso -= 1;
  }
  return palindrome;
}
