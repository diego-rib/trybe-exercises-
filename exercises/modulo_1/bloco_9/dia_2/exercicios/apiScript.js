// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

async function fetchJoke() {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const joke = await fetch(API_URL, myObject)
  .then(response => response.json())
  .then(response => response.joke);
  
  const container = document.querySelector('#jokeContainer');
  container.innerText = joke;

};

async function lessThan8000() {
  return new Promise((resolve, reject) => {
    const squaredNumbers = [];
    for (let index = 0; index < 10; index += 1) {
      squaredNumbers.push(Math.round((Math.random() * 49 + 1 ) ** 2));
    }
    const sum = squaredNumbers.reduce((acc, cur) => acc + cur, 0);
    if (sum < 8000) {
      resolve(sum);
    } else {
      reject('É mais de oito mil! Essa promise deve estar quebrada!');
    }
  })
  .then(num => {
    const divs = [2, 3, 5, 10];
    sumAll(divs.map(div => num / div));
  })
  .catch(msg => console.log(msg));
}

function sumAll(numbers) {
  const result = numbers.reduce((acc, cur) => acc + cur);
  console.log(Math.round(result));
}


window.onload = () => {
  fetchJoke();
  lessThan8000();
}