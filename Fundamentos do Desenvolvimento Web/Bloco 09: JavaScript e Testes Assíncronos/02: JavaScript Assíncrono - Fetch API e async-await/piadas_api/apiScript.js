// apiScript.js     
// const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const result = await fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data)
    .catch(error => `Erro ao acessar requisição. \n ${error}.`);

  const h2 = document.getElementById('jokeContainer');
  if (typeof result === 'object') {
    h2.innerText = result.joke;
  } else {
    h2.innerText = '[ERRO] Ao buscar informações.';
  }
};

window.onload = () => fetchJoke();
