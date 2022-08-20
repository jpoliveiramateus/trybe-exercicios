const readlineSync = require('readline-sync');

const generateFibonacci = () => {
  let fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  const number = readlineSync.questionInt('Digite um número: ');
  if (number > 0) {
    for (let i = 2; i < number; i += 1) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    if (number === 10) {
      return fibonacci;
    }
    const fibonacciWithoutZero = fibonacci.filter((number) => number !== 0);
    return fibonacciWithoutZero;
  }
  return 'Informe um número maior que 0';
}
// console.log(generateFibonacci());

const calculator = () => {
  const num1 = readlineSync.questionFloat('Digite um número: ');
  const num2 = readlineSync.questionFloat('Digite um número: ');
  const num3 = readlineSync.questionFloat('Digite um número: ');
  return new Promise((resolve, reject) => {
    const result = (num1 + num2) * num3;
    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }
    resolve(console.log(`Resultado: ${result}`));
  });
}
// calculator();