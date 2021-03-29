let n = 5;
let espaco = ' ';
let asterisco = '*';

if (n % 2 === 0) {
  for (let index = 1; index <= n; index += 1) {
    if (index % 2 === 0) {
      console.log(espaco.repeat((n - index)/2) + asterisco.repeat(index) + espaco.repeat((n -index)/2));
    }
  }
} else {
  for (let index = 1; index <= n; index += 1) {
    if (index % 2 !== 0) {
      console.log(espaco.repeat((n - index)/2) + asterisco.repeat(index) + espaco.repeat((n -index)/2));
    }
  }
}