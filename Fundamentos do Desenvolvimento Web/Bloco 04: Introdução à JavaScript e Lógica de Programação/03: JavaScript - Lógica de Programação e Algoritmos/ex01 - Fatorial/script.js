// 4! = 4 x 3 x 3 x 2 x 1 = 24

let num = 10;
let fatorial = 1;

for(let i = num; i > 1; i -= 1){
    fatorial *= i;
}

console.log(fatorial);