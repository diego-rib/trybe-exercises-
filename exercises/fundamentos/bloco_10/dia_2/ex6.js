const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    const animalFound = Animals.find(animal => animal.name === name) || false;
    if (animalFound) return resolve(animalFound);
    return reject('Nenhum animal com esse nome!');
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name).then(animal => animal);
};

// Part 2

const findAnimalByAge = (age) => (
  new Promise ((resolve, reject) => {
    const animals = Animals.filter(animal => animal.age === age);
    if (animals.length > 0) return resolve(animals);
    return reject('Nenhum animal com essa idade encontrado.');
  })
);

const getAnimalsByAge = (age) => {
  return findAnimalByAge(age).then(animal => animal);
};

module.exports = { getAnimal, getAnimalsByAge };