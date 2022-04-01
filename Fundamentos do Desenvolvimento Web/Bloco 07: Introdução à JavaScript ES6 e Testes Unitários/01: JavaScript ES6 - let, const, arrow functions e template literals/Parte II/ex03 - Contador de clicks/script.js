const button = document.getElementById('button');
const result = document.getElementById('result');
result.innerText = 0;

button.addEventListener('click', () => result.innerText = parseInt(result.innerText) + 1);
