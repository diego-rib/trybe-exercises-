// 3 - Reescreva o código do exercício anterior para que utilize async/await .
const ex1 = require('./ex1');

const random = () => Math.floor(Math.random() * 100 + 1);
const testNumbers = [random(), random(), random()];

const main = async () => {
  try {
    const result = await ex1(...testNumbers);
    console.log(result);
  } catch (err) {
    console.log(err.message)
  }
};

main();
