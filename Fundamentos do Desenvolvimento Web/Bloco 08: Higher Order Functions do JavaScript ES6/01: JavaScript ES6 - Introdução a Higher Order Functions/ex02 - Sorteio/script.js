const message = (num, result) => num === result ? `Parabéns você ganhou!` : `Tente novamente.`;

const prizeDraw = (num, func) => {
  const result =  Math.floor(Math.random() * 5 + 1);
  return func(num, result);
}

console.log(prizeDraw(2, message));
