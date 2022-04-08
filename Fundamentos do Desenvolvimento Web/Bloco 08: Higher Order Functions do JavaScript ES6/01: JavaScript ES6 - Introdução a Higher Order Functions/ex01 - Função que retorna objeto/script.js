const register = (nameComplet) => {
  const email = nameComplet.toLowerCase().split(' ').join('_');
  return { nameComplet, email: `${email}@trybe.com`};
}

const newEmployees = (func) => {
  const employees = {
    id1: func('João Pedro'),
    id2: func('Otávio Paiva'),
    id3: func('Hiago Guerra'),
  }
  return employees;
};

console.log(newEmployees(register));