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

// ex04

// let inputLine = '';
// let symbol = '*';
// let midOfMatrix = (n + 1) / 2;
// let controlRight = midOfMatrix;
// let controlLeft = midOfMatrix;

// for (let indexLine = 0; indexLine <= midOfMatrix; indexLine += 1) {
//     for (let indexColumn = 0; indexColumn <= n; indexColumn += 1) {
//         if (indexColumn > controlLeft && indexColumn < controlRight) {
//             inputLine += symbol;
//         } else {
//             inputLine += ' ';
//         }
//     }
//     console.log(inputLine);
//     inputLine = '';
//     controlLeft -= 1;
//     controlRight += 1;
// }

// ex05

n = 5;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col === controlLeft || col === controlRight || line === middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  console.log(outputLine);
  controlLeft -= 1;
  controlRight += 1;
}

// ex06
// let count = 0;

// for (let i = 0; i <= n; i += 1) {
//     if (n % i === 0) {
//         count += 1;
//     }
// }
// if (count == 2) {
//     console.log('É primo.');
// } else {
//     console.log('Não é primo.');
// }
