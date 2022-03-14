n = 7;
/*
for (let i = n; n >= 1; n -= 1) {
    let asterisco = '*';
    console.log(asterisco.repeat(i));
}

let count = 1;
for (let i = n; n >= 1; n -= 1) {
    let asterisco = '*';
    console.log(asterisco.repeat(count));
    count += 1;
}

let count = 1;
for (let i = n; n >= 1; n -= 1) {
    let asterisco = '*';
    let espaco = ' ';
    console.log(espaco.repeat(i - count) + asterisco.repeat(count));
    count += 1;
}

let count = 3;
let countTwo = 1;
for (let i = n; n >= 1; n -= 1) {
    let asterisco = '*';
    let espaco = ' ';
    if (count >= 0 && countTwo <= i) {
        console.log(espaco.repeat(count) + asterisco.repeat(countTwo));
    }
    count -= 1;
    countTwo += 2;
}
*/
let count = 3;
let countTwo = 0;
let som = 0;
for (let i = n; n >= 1; n -= 1) {
    let asterisco = '*';
    let espaco = ' ';
    if (count >= 0 && countTwo <= i) {
        console.log(espaco.repeat(count) + asterisco.repeat(1) + espaco.repeat(countTwo) + asterisco.repeat(countTwo));
    }
    count -= 1;
    countTwo += 1 + som;
    som += 1;
}