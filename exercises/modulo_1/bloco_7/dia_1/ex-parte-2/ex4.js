function subsPalavra(palavra) {
  let frase = 'Tryber x aqui!';
  frase = frase.split(' ');
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] === 'x') {
      frase[index] = palavra;
    }
  }
  return frase.join(' ');
}

const skills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python'];

function skillsConcat(frase) {
  return `${frase} Minhas cinco principais habilidades são: ${skills.join(', ')}; ... #goTrybe".`;
}

console.log(skillsConcat(subsPalavra('Daniel O Brabo')));