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
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function criarDias() {
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

let botao = document.querySelector('#btn-holiday');
let classHoliday = document.querySelectorAll('.holiday');
function addColor() {
    for (let i = 0; i < classHoliday.length; i += 1) {
        classHoliday[i].style.backgroundColor = 'white';
    }
    botao.removeEventListener('click', addColor);
    botao.addEventListener('click', removeColor);
}
function removeColor() {
    for (let i = 0; i < classHoliday.length; i += 1) {
        classHoliday[i].style.backgroundColor = 'rgb(238,238,238)';
    }
    botao.removeEventListener('click', removeColor);
    botao.addEventListener('click', addColor);
}
addColor();
removeColor();

function criarBotaoSexta(sexta) {
    let divBotao = document.querySelector('.buttons-container');
    let botaoSexta = document.createElement('button');
    botaoSexta.innerText = sexta;
    botaoSexta.setAttribute('id', 'btn-friday');
    divBotao.appendChild(botaoSexta);
}
criarBotaoSexta('Sexta-feira');

let botaoSexta = document.querySelector('#btn-friday');
let classFriday = document.querySelectorAll('.friday');
function addSexta() {
    for (let i = 0; i < classFriday.length; i += 1) {
        classFriday[i].innerText = 'Sextou!';
    }
    botaoSexta.removeEventListener('click', addSexta);
    botaoSexta.addEventListener('click', removeSexta);
}
function removeSexta() {
    classFriday[0].innerText = dezDaysList[5];
    classFriday[1].innerText = dezDaysList[12];
    classFriday[2].innerText = dezDaysList[19];
    classFriday[3].innerText = dezDaysList[26];
    botaoSexta.removeEventListener('click', removeSexta);
    botaoSexta.addEventListener('click', addSexta);
}
addSexta();
removeSexta();

function zoomMouse() {
    let dias = document.querySelectorAll('li.day');
    for (let i = 0; i < dias.length; i += 1) {
        dias[i].addEventListener('mouseenter', function() {
            dias[i].style.fontSize = '2em';
            dias[i].addEventListener('mouseleave', function() {
                dias[i].style.fontSize = '20px';
            })
        })
    }
}
zoomMouse();

let divTarefas = document.querySelector('.my-tasks');
function tarefaPersonalizada(nomeTarefa) {
   let tarefa = document.createElement('span');
   tarefa.innerText = nomeTarefa;
   divTarefas.appendChild(tarefa);
}
tarefaPersonalizada('Projeto:');

function legendaComCor(cor) {
    let div = document.createElement('div');
    div.className = 'task';
    div.style.backgroundColor = cor;
    divTarefas.appendChild(div);
}
legendaComCor('green');

let divTask = document.querySelector('.task');
function clicarDiv() {
    divTask.addEventListener('click', function() {
        divTask.classList.add('selected');
        divTask.addEventListener('click', function(){
            divTask.classList.remove('selected'); 
        })
    })
}
clicarDiv();

function corNoDia() {
    let dias = document.querySelectorAll('li.day');
    for(let i = 0; i < dias.length; i += 1) {
        dias[i].addEventListener('click', function() {
            dias[i].style.color = 'green';
        })
    }
}
corNoDia();
