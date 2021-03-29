// Exercicio 1 - mostrar mensagem de boas vindas

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda,', info.personagem);

// Exercicio 2 - adicionar chave e valor ao objeto 'info'

info['recorrente'] = 'Sim';

console.log(info);

// Exercicio 3 - mostrar as chaves do objeto 'info'

for (let key in info) {
  console.log(key);
}

// Exercicio 4 - mostrar o valor das chaves do objeto 'info'

for (let key in info) {
  console.log(info[key]);
}

// Exercicio 5 - definir uma nova estrutura e exibir ambos os conteudos

let infoTio = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let key in info) {
  if (key === 'recorrente') {
    if (info[key] === infoTio[key]) {
      console.log('Ambos ' + key + 's');
    } else {
      console.log(info.recorrente + ' e ' + infoTio.recorrente);
    }
  } else {
    console.log(info[key] + ' e ' + infoTio[key]);
  }
}