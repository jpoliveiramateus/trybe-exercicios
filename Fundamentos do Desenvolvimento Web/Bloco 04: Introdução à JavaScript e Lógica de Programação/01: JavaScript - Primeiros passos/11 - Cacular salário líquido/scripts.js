const salarioBruto = 3000.00;
let salarioBase;

if (salarioBruto >= 1556.94){
    salarioBase = salarioBruto * 0,92;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto * 0,91;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioBase= salarioBruto * 0,88;
} else {
    salarioBase = salarioBruto + 570.88;
}

console.log(salarioBruto);