function switchLetterNumber(currentChar, code) {
  for (let key in code) {
    if (currentChar === key) {
      return code[key];
    }
  }
  return currentChar;
}

function encode(string) {
  let coding = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let codedString = '';
  for (let index = 0; index < string.length; index += 1) {
    codedString += switchLetterNumber(string[index], coding);
  }
  return codedString;
}

function decode(string) {
  let decoding = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decodedString = '';
  for (let index = 0; index < string.length; index += 1) {
    decodedString += switchLetterNumber(string[index], decoding);
  }
  return decodedString;
}

module.exports = { decode, encode };
