function hydrate(str) {
  let drinks = str.match(/\d+/g);
  const waterCups = drinks.reduce((total, value) => total + parseInt(value, 10), 0);
  return `${waterCups} ${waterCups > 1 ? 'copos' : 'copo'} de água`;
}

module.exports = hydrate;
