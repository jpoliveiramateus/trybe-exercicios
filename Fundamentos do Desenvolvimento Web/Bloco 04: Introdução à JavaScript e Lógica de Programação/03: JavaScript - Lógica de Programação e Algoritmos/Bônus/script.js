let n = 5;
/*
for (let i = 1; i <= n; i += 1) {
    console.log('*'.repeat(n));
}

for (let i = 1; i <= n; i += 1) {
    console.log('*'.repeat(i));
}

let contador = n - 1;
for (let i = 1; i <= n; i += 1) {
    console.log(' '.repeat(contador) + '*'.repeat(i));
    contador -= 1;
}
*/
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let right = midOfMatrix;
let left = midOfMatrix;

for (let i = 0; i <= midOfMatrix; i += 1) {
    for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
        if (columnIndex > left && columnIndex < right) {
          inputLine = inputLine + '*';
        } else {
          inputLine = inputLine + ' ';
        }
    }
    console.log(inputLine);
    inputLine = '';
    right += 1;
    left -= 1;
};