function createTechObjects(list, name) {
  return list.map((technology) =>({ tech: technology, name }));
}

function techList(listDevTech, name) {
  if (listDevTech.length <= 0) {
    return 'Vazio!';
  }
  let sortedListDevTech = listDevTech.sort();
  return createTechObjects(sortedListDevTech, name);
}

module.exports = techList;
