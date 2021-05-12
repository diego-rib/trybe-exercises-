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


window.onload = () => fetchJoke();