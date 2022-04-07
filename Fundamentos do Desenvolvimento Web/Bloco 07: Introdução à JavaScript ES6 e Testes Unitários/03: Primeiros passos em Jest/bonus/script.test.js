const searchEmployee = require('./script');

it('A função searchEmployee existe: ', () => {
  expect(searchEmployee).toBeDefined();
});

it('Informações corretas: ', () => {
  expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
  expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
  expect(searchEmployee('9852-2-2', 'firstName')).toBe('Jeff');
  expect(searchEmployee('5569-4', 'specialities')).toEqual(['Frontend', 'Redux', 'React', 'CSS']);
});

it('Mensagem de erro ID não identificada', () => {
  expect(searchEmployee('29123', 'firstName')).toBe('ID não identificada');
});

it('Mensagem de erro Informação indisponível', () => {
  expect(searchEmployee('5569-4', 'fullName')).toBe('Informação indisponível');
});
