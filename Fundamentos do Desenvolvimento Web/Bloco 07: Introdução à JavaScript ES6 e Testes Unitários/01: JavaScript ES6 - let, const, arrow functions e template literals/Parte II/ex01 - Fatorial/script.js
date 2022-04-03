const fatorial = (number) => {
  let fatorial = 1;
  for (let i = number; i >= 1; i -= 1) {
    fatorial *= i;
  }
  return fatorial;
}

console.log(fatorial(5));
