const fatorial = (number) => {
  let fatorial = 1;
  for (let i = number; i >= 1; i -= 1) {
    fatorial *= i;
  }
  return fatorial;
}
const number = 5; // Número de entrada.

number >= 0 ? console.log(fatorial(number)) : console.log(`Número negativo!`);
