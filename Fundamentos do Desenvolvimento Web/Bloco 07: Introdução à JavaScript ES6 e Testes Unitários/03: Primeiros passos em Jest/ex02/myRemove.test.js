const { describe } = require('yargs');
const myRemove = require('./myRemove');

test('Retora array esperado', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
});

test('Não retorna o array [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toContain([1, 2, 3, 4]);
});

test('Retora array esperado 2', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});