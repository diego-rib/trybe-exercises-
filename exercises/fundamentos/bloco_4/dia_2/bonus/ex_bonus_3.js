let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbers_alterado = [];

console.log(numbers);

for (index = 0; index < numbers.length; index += 1) {
  if (index === numbers.length-1) {
    numbers_alterado.push(numbers[index] * 2);
  } else {
    numbers_alterado.push(numbers[index] * numbers[index+1]);
  }
}

console.log(numbers_alterado);