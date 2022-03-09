let word = 'trybe';
let palavraInvertida = '';

for(let i = word.length -1; i >= 0; i -= 1){
    palavraInvertida += word[i];
}

console.log(palavraInvertida);
