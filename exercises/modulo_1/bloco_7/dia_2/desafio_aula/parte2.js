const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const keys = Object.keys(student);
  for (let index in keys) {
    console.log(`${keys[index]}, Nível: ${student[keys[index]]}`);
  } 
}

listSkills(student1);
console.log(' ');
listSkills(student2);
