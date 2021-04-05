let num1 = 122;
let num2 = 81;


// Source : https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript
function getlength(number) {
  return number.toString().length;
} 

let sum = 0;
let multiplier = 1;
let divisor = 10;
let auxSum = 1;
if (num1 >= 10 && num2 >= 10) {
  while (auxSum > 0) {
    auxSum = (num1 % divisor) + (num2 % divisor);
    sum += auxSum * multiplier;
    multiplier = 10 ** getlength(sum);
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
  }
} else {
  return num1 + num2;
}

return sum;