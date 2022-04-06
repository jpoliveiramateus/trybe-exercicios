const { describe, test, expect } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuzz');

describe('A função myFizzBuzz', () => {
  test('Número divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Número divisível por 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  test('Número divisível por 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  test('Número não é divisível por 3 ou 5', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  test('Parâmetro recebido não é um número', () => {
    expect(myFizzBuzz('hi')).toBe(false);
  });
})