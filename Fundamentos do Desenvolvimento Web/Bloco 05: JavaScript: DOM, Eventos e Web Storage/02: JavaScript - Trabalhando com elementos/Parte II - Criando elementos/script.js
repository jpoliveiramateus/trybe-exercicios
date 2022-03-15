let pai = document.querySelector('#pai');
let irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.setAttribute("id","irmaoElementoOndeVoceEsta");
pai.appendChild(irmaoElementoOndeVoceEsta);

let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.setAttribute('id','filhoElementoOndeVoceEsta');
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.setAttribute('id','filhoDoPrimeiroFilhoDoFilho');
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

window.document.querySelector('#filhoDoPrimeiroFilhoDoFilho').parentNode.parentNode.parentNode.childNodes[5];