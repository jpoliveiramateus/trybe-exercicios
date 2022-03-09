//Ordenar em ordem crescente

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1){
    for (let j = 0; j < (numbers.length - i - 1); j += 1){
        if (numbers[j] > numbers[j + 1]){
            let tmp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = tmp;
        }
    }
}

console.log(numbers);

//Ordenar em ordem decrecente

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 0; i < numbers.length; i += 1){
//     for (let j = 0; j < (numbers.length - i - 1); j += 1){
//         if (numbers[j] > numbers[j + 1]){
//             let tmp = numbers[j];
//             numbers[j] = numbers[j + 1];
//             numbers[j + 1] = tmp;
//         }
//     }
// }

// console.log(numbers);