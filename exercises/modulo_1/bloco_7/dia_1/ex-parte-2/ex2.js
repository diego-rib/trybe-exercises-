const maiorPalavra = (str) => (
  str.split(' ').sort((a, b) => a.length - b.length).pop()
);

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));