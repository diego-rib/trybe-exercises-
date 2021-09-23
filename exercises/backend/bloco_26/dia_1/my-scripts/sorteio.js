const { questionInt, keyInYN } = require('readline-sync');

let play = true;
while(play) {
  const magicNumber = Math.round(Math.random() * 10);
  const guess = questionInt('Adivinhe o número secreto: ');
  
  if (guess === magicNumber) {
    console.log('\nParabéns, número correto!');
  } else {
    console.log(`\nOpa, não foi dessa vez. O número era ${magicNumber}`);
  }
  
  play = keyInYN('\nDeseja jogar novamente? ');
  console.log();
}
