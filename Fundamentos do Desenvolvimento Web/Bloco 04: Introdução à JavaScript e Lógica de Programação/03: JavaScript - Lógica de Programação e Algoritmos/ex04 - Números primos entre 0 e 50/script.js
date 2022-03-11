let n = 8;
let count = 0;

for (let i = 0; i <= n; i += 1){
    if(n % i === 0){
        count += 1;
    }
}

if(count == 2){
    console.log('número primo');
} else {
    console.log('não é primo');
}