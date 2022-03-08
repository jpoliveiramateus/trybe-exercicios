const salarioBruto = 3000.00;
let salarioBase;

if (salarioBruto <= 1556.94){
    salarioBase = salarioBruto * 0.92;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto * 0.91;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto * 0.89;
} else {
    salarioBase = salarioBruto + 570.88;
}

console.log("Salário base de R$" + (salarioBase.toString().replace('.', ',')));

let imposto;

if (salarioBase <= 1903.98){
    imposto = salarioBase;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    imposto = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    imposto = (salarioBase * 0.15) - 354.90;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    imposto = (salarioBase * 0.225) - 636.13;
} else {
    imposto = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - imposto;

console.log("Salário líquido de R$" + (salarioLiquido.toString().replace('.', ',')));

