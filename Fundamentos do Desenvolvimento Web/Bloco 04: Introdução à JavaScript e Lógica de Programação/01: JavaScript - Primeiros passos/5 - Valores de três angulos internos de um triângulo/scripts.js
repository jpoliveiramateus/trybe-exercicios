function anguloTriangulo(valor1, valor2, valor3) {
    if (valor1 < 0 || valor2 < 0 || valor3 < 0) {
        return 'Erro, ângulo inválido!';
    } else if (valor1 + valor2 + valor3 == 180) {
        return 'true';
    } else {
        return 'false';
    }
}

console.log(anguloTriangulo(40, 60, 80));
