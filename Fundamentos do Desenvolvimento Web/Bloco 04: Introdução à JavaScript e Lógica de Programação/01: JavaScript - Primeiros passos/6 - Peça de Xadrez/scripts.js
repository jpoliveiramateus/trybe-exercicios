var peca = "BisPo";

if (peca.toUpperCase() == "rei" || peca.toLowerCase() == "rei"){
    console.log("horizontal, vertical e diagonal");
} else if (peca.toUpperCase() == "rainha" || peca.toLowerCase() == "rainha"){
    console.log("horizontal, vertical e diagonal");
} else if (peca.toUpperCase() == "bispo" || peca.toLowerCase() == "bispo"){
    console.log("diagonal");
} else if (peca.toUpperCase() == "cavalo" || peca.toLowerCase() == "cavalo"){
    console.log("horizontal e vertical");
} else if (peca.toUpperCase() == "torre" || peca.toLowerCase() == "torre"){
    console.log("vertical ou horizontal");
} else if (peca.toUpperCase() == "peao" || peca.toLowerCase() == "peao"){
    console.log("diagonal");
} else {
    console.log("[ERRO]Peça inválida!");
}