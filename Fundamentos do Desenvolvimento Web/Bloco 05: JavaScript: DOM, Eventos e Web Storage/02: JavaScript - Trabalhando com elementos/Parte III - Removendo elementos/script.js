let pai = window.document.querySelector('#pai');
let primeiroFilho = window.document.querySelector('#primeiroFilho');
pai.removeChild(primeiroFilho);

let elementoOndeVoceEsta = window.document.querySelector('#elementoOndeVoceEsta');
let segundoEUltimoFilhoDoFilho = window.document.querySelector('#segundoEUltimoFilhoDoFilho');
elementoOndeVoceEsta.removeChild(segundoEUltimoFilhoDoFilho);

let terceiroFilho = document.querySelector('#terceiroFilho');
pai.removeChild(terceiroFilho);

let quartoEUltimoFilho = document.querySelector('#quartoEUltimoFilho');
pai.removeChild(quartoEUltimoFilho);