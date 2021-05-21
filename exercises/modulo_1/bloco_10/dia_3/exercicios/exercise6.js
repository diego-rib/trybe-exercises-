const fetch = require("node-fetch");

const dogImage = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random';
  await fetch(url)
    .then((response) => {
      response
        .json()
        .then(json => {
          response.ok ? Promise.resolve(json) : Promise.reject(json)
        });
    });
};

module.exports = dogImage;