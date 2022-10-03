import readline from "readline-sync";

const unitsLength = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convertLength(value: number, baseUnit: string, convertUnit: string) {
  const fromIndex = unitsLength.indexOf(baseUnit); // pegamos o index da unidade base no array
  const toIndex = unitsLength.indexOf(convertUnit); // pegamos o index da unidade para a conversão
  const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent);
}

function exec() {
  // pegamos o valor a ser convertido digitado pela pessoa usuária
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");

  // pedimos que a pessoa usuária escolha a unidade base
  const fromUnitChoiceIndex = readline.keyInSelect(unitsLength, "Escolha um número para a unidade base:");

  // pedimos que a pessoa usuária escolha a unidade para conversão
  const toUnitChoiceIndex = readline.keyInSelect(unitsLength, "Escolha um número para a conversão:");


  const fromUnitChoice = unitsLength[fromUnitChoiceIndex];
  const toUnitChoice = unitsLength[toUnitChoiceIndex];

  const result = convertLength(value, fromUnitChoice, toUnitChoice)

  // montamos a mensagem de saída
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`

  // printamos a mensagem de saída no terminal
  console.log(message);
}

exec();