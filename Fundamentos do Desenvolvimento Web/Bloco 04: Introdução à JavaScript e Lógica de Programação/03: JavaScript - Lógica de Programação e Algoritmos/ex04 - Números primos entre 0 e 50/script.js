let biggestNumber = 0;
for (let n = 0; n <= 50; n += 1) {
    let count = 0;
    for (let i = 0; i <= n; i += 1) {
        if (n % i === 0) {
            count += 1;
        }
    }
    if (count == 2 && n > biggestNumber) {
        biggestNumber = n;
    }
}
console.log(biggestNumber);