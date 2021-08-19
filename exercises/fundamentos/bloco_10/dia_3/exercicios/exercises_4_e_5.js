const uppercase = (str = false) => str ? str.toUpperCase() : false;

const firstLetter = (str = false) => str ? str[0] : false;

const concatStrings = (str1 = '', str2 = '') => `${str1}${str2}`;

module.exports = {
  uppercase,
  firstLetter,
  concatStrings,
};