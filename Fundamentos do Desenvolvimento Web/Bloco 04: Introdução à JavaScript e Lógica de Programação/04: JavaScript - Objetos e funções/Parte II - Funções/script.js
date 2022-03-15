/*
function palindromo(frase) {
    if (frase === frase.split('').reverse().join('')) {
        return true;
    }
    return false;
}
console.log(palindromo('arara'));

function indiceMaiorValor(numeros) {
    let maiorValor = numeros[0];
    for (let i = 0; i < numeros.length; i += 1) {
        if (numeros[i] > maiorValor) {
            maiorValor = numeros[i];
        }
    }
    return numeros.indexOf(maiorValor);
}
console.log(indiceMaiorValor([9, 2, 12, 8, 7, 1]));

function indiceMenorValor(numeros) {
    let menorValor = numeros[0];
    for (let i = 0; i < numeros.length; i += 1) {
        if (numeros[i] < menorValor) {
            menorValor = numeros[i];
        }
    }
    return numeros.indexOf(menorValor);
}
console.log(indiceMenorValor([9, 2, 12, -8, 7, 1]));

function nomeMaiorQuantidadeCaracteres(nomes) {
    let maiorNome = nomes[0];
    for (let i = 0; i < nomes.length; i += 1) {
        if (nomes[i].length > maiorNome.length) {
            maiorNome = nomes[i];
        }
    }
    return maiorNome;
}
console.log(nomeMaiorQuantidadeCaracteres(['Fernanda', 'Lucas', 'Nádia', 'José', 'Cairo', 'Joana']));

function inteiroRepeteMaisVezes(numeros) {
    for (let i = 0; i < numeros.length; i += 1) {
        let count = 0;
        let num = 0;
        for (let j = 0; j < numeros.length; j += 1) {
            if (numeros[j] === numeros[i]) {
                num = numeros[j];
                count += 1;
            }
        }
        return num;
    }
}
console.log(inteiroRepeteMaisVezes([9, 9, 2, 9, 8, 2, 3]));

function somatorio(numero) {
    let resultado = 0;
    for (let i = numero; i >= 1; i -= 1) {
        resultado += i;
    }
    return resultado;
}
console.log(somatorio(5));
*/
function verificaFimPalavra(palavra, fimPalavra) {
    if (fimPalavra.length < palavra.length) {
        return palavra.endsWith(fimPalavra);
    } else {
        return '[ERRO]';
    }
}
console.log(verificaFimPalavra('São Paulo', 'aulo'));