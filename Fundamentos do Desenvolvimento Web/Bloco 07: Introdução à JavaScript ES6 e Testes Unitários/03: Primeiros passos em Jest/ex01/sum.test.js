const sum = require('./sum');

describe('A function sum', () => {
  test('A soma 4 + 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('A soma 0 + 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('Mensagem de erro', () => {
    expect(() => { sum(4, "5") }).toThrow();
  })
  test('Mensagem de erro específica', () => {
    expect(() => { sum(4,"5") }).toThrowError(new Error('parameters must be numbers'));
  })
});
