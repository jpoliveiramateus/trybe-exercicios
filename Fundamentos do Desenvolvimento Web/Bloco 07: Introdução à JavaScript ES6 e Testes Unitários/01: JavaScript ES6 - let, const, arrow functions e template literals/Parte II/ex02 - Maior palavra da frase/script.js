const maiorPalavra = (palavra) => {
  const palavras = [];
  palavras.push = palavra.split(' ');
  let maiorPalavra = '';

  for (let i = 0; i < palavras.push.length; i += 1) {
    if (palavras.push[i].length > maiorPalavra.length) {
      maiorPalavra = palavras.push[i];
    }
  }
  return maiorPalavra;
}
console.log(maiorPalavra('João Pedro Oliveira'));
