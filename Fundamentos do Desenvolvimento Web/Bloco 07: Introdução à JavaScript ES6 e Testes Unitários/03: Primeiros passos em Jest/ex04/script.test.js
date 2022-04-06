const { describe, test, expect } = require('@jest/globals');
const {encode, decode} = require('./script');

describe('Função encode', () => {
  test('É uma função', () => {
    expect(encode).toBeDefined();
  });
  test('Vogais convertidas em números', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  test('Demais letras não são convertidas', () => {
    expect(encode('teste')).toBe('t2st2');
  });
  test('Retorna mesmo número de caracteres', () => {
    expect(encode('teste').length).toBe('t2st2'.length);
  });
});

describe('Função decode', () => {
  test('É uma função', () => {
    expect(decode).toBeDefined();
  });
  test('Números convertidos em vogais', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
  test('Demais números não são convertidos', () => {
    expect(decode('t2st2')).toBe('teste');
  });
  test('Retorna mesmo número de caracteres', () => {
    expect(decode('t2st2').length).toBe('teste'.length);
  });
});