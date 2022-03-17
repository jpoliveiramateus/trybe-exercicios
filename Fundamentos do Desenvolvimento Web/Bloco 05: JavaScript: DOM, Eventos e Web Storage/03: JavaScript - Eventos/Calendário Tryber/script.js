function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function criarDias() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let listaDias = document.getElementById('days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let itemLista = document.createElement('li');
        let dia = dezDaysList[index];
        itemLista.innerHTML = dia;
        itemLista.className = 'day';
        listaDias.appendChild(itemLista);
        if (dia === 24 || dia === 31) {
            itemLista.className = 'day holiday';
        }
        if (dia === 4 || dia === 11 || dia === 18) {
            itemLista.className = 'day friday';
        }
        if (dia === 25) {
            itemLista.className = 'day holiday friday';
        }
    }
}
criarDias();

function criarBotao(Feriados) {
    let divBotao = document.querySelector('.buttons-container');
    let botao = document.createElement('button');
    botao.innerText = Feriados;
    botao.setAttribute('id', 'btn-holiday');
    divBotao.appendChild(botao);
}
criarBotao('Feriados');

function botaoFeriado() {
    let botao = document.querySelector('#btn-holiday');
    botao.addEventListener('click', addColor);
    function addColor() {
        let classHoliday = document.querySelectorAll('.holiday');
        for(let i = 0; i < classHoliday.length; i += 1) {
           classHoliday[i].style.backgroundColor = 'white';
        }
    }
}
botaoFeriado();
