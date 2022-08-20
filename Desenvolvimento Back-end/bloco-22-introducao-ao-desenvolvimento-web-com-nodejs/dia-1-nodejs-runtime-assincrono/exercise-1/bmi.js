const readlineSync = require('readline-sync');
const bmi = (weight, height) => {
  const result = (weight / height / height) * 10000;
  console.log(`IMC: ${result.toFixed(1)}`);
  if (result < 18.5) {
    console.log("Abaixo do peso (magreza)");
  } else if (result >= 18.5 && result <= 24.9) {
    console.log("Peso normal")
  } else if (result >= 25 && result <= 29.9) {
    console.log("Acima do peso (sobrepeso)");
  } else if (result >= 35 && result <= 34.9) {
    console.log("Obesidade grau I");
  } else if (result >= 35 && result <= 39.9) {
    console.log("Obesidade grau II");
  } else {
    console.log("Obesidade graus III e IV");
  }
};

console.log("Body Mass Index");
const weight = readlineSync.questionFloat('Wha\'t is your weight? (kg) ');
const height = readlineSync.questionFloat('What\' your height? (cm) ');

bmi(weight, height);