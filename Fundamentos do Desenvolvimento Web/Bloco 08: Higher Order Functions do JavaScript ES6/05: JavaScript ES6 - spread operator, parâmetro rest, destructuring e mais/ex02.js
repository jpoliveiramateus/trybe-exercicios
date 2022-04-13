// escreva sum abaixo

const result = (...num) => num.reduce((acc, value) => acc + value);
console.log(result(2, 3, 4, 2));
