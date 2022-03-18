let corDeFundo = document.getElementById('corDeFundo');
let corDoTexto = document.getElementById('corDoTexto');
let tamanhoDaFonte = document.getElementById('tamanhoDaFonte');
let espacamento = document.getElementById('espacamento');
let tipoDaFonte = document.getElementById('tipoDaFonte');
let botao = document.getElementById('botao');

function aplicarValores() {
    let cor = corDeFundo.value;
    let corText = corDoTexto.value;
    let tamanho = tamanhoDaFonte.value;
    let espaco = espacamento.value;
    let tipo = tipoDaFonte.value;
    document.body.style.backgroundColor = cor;
    document.body.style.color = corText;
    document.body.style.fontSize = tamanho + 'px';
    document.body.style.lineHeight = espaco + 'px';
    document.body.style.fontFamily = tipo;
    localStorage.setItem('corDeFundo', JSON.stringify(corDeFundo.value));
    localStorage.setItem('corDoTexto', JSON.stringify(corDoTexto.value));
    localStorage.setItem('tamanhoDaFonte', JSON.stringify(tamanhoDaFonte.value));
    localStorage.setItem('espacamento', JSON.stringify(espacamento.value));
    localStorage.setItem('tipoDaFonte', JSON.stringify(tipoDaFonte.value));
}

function addToLocalStorage() {
    let corDeFundo = JSON.parse(localStorage.getItem('corDeFundo'));
    document.body.style.backgroundColor = corDeFundo;
    let corDoTexto = JSON.parse(localStorage.getItem('corDoTexto'));
    document.body.style.color = corDoTexto;
    let tamanhoDaFonte = JSON.parse(localStorage.getItem('tamanhoDaFonte'));
    document.body.style.fontSize = tamanhoDaFonte + 'px';
    let espacamento = JSON.parse(localStorage.getItem('espacamento'));
    document.body.style.lineHeight = espacamento + 'px';
    let tipoDaFonte = JSON.parse(localStorage.getItem('tipoDaFonte'));
    document.body.style.fontFamily = tipoDaFonte;
}

botao.addEventListener('click', aplicarValores);

window.onload = function() {
    addToLocalStorage();
};