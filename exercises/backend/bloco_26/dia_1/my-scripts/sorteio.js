const { questionInt, keyInYN, setDefaultOptions } = require('readline-sync');

const sorteio = () => {
  let play = true;
  while(play) {
    const magicNumber = Math.round(Math.random() * 10);
    
    const guess = questionInt('Adivinhe o número secreto (0-10): ');
    
    let message = `\nOpa, não foi dessa vez. O número era ${magicNumber}`;
    if (guess === magicNumber) {
      message = '\nParabéns, número correto!';
    }
    console.log(message);
    
    play = keyInYN('\nDeseja jogar novamente? ');
    console.log();
  }
}

module.exports = sorteio;
