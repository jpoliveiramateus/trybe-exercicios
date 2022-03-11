let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = array[0];
let menor = array[0];

for (let i = 0; i < array.length; i += 1){
    if(array[i].length > maior.length){
        maior = array[i];
    }
}

for (let i = 0; i < array.length; i += 1){
    if(array[i].length < menor.length){
        menor = array[i];
    }
}

console.log('A maior palavra é: ' + maior);
console.log('A menor palavra é: ' + menor);