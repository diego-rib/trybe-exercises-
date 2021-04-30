const register = (employee) => ({
  nomeCompleto: employee,
  email: `${employee.split(' ').join('_').toLowerCase()}@trybe.com`
});

const newEmployees = (register) => {
  const employees = {
    id1: register('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: register('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: register('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.table(newEmployees(register));