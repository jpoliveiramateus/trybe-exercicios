let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1){
    for(let ind = numbers[0]; ind < numbers.length - 1; ind += 1){
        console.log(numbers[ind]);
    }
}