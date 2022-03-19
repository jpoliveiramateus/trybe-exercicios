let n = 5;
/*
// ex01
for (let i = 1; i <= n; i += 1) {
    console.log('*'.repeat(n));
}
// ex02
for (let i = 1; i <= n; i += 1) {
    console.log('*'.repeat(i));
}
// ex03
let contador = n - 1;
for (let i = 1; i <= n; i += 1) {
    console.log(' '.repeat(contador) + '*'.repeat(i));
    contador -= 1;
}
*/
// ex06
let count = 0;

for (let i = 0; i <= n; i += 1) {
    if (n % i === 0) {
        count += 1;
    }
}
if (count == 2) {
    console.log('É primo.');
} else {
    console.log('Não é primo.');
}
