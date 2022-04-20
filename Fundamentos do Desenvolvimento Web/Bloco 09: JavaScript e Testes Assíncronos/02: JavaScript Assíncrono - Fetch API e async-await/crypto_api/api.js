// const fetch = require('node-fetch');

const fetchCrypto = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  const url2 = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json';

  const result = await fetch(url)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => `Algo deu errado :( \n${error}`);
  
  const result2 = await fetch(url2)
  .then((response) => response.json());

  const list = document.getElementById('crypto');

  for (let i = 0; i <= 9; i += 1) {
    const li = document.createElement('li');
    const { name, symbol, priceUsd } = result[i];
    li.innerText = `${name} (${symbol}): ${(priceUsd * result2.brl).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
    list.appendChild(li);
  }

};

fetchCrypto();
