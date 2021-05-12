// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const container = document.querySelector('#jokeContainer');
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ joke }) => {
      container.innerText = joke;
    });
};

async function lessThan8000() {
  return new Promise((resolve, reject) => {
    const squaredNumbers = [];
    for (let index = 0; index < 10; index += 1) {
      squaredNumbers.push(Math.round((Math.random() * 49 + 1 ) ** 2));
    }
    const sum = squaredNumbers.reduce((acc, cur) => acc + cur, 0);
    if (sum < 8000) {
      resolve('Promise resolvida');
    } else {
      reject('Promise rejeitada');
    }
  })
  .then(msg => console.log(msg))
  .catch(msg => console.log(msg));
}

lessThan8000();

// window.onload = () => fetchJoke();