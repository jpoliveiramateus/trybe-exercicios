const button = document.getElementById('enviar');
function stopComportment(event) {
  event.preventDefault();
}
button.addEventListener('click', stopComportment);

const nameComplete = document.getElementById('nome-completo');
const email = document.getElementById('input-email');
const textArea = document.getElementById('texto-concurso');
const date = document.getElementById('data-viagem');
const checkBox = document.getElementById('imagens-trybe');

function checkForm() {
  if (nameComplete.value === '' || nameComplete.value.length < 10 || nameComplete.value.length > 40) {
    window.alert('Dados Inválidos.');
  } else if (email.value === '' || email.value.length < 10 || email.value.length > 50) {
    window.alert('Dados Inválidos.');
  } else if (textArea.value === '' || textArea.value.length > 500) {
    window.alert('Dados Inválidos.');
  } else if (date.value === '') {
    window.alert('Dados Inválidos.');
  } else if (checkBox.checked === false) {
    window.alert('Dados Inválidos.');
  } else {
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrypeTrip.');
  }
}
button.addEventListener('click', checkForm);
