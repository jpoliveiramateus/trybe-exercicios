const angulo1 = 60;
const angulo2 = 40;
const angulo3 = 80;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
    console.log('Erro, ângulo inválido!');
} else if (angulo1 + angulo2 + angulo3 == 180){
    console.log('true');
} else {
    console.log('false');
}