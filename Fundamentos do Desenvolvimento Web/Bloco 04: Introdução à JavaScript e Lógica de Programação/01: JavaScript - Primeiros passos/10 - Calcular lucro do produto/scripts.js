const custo = 30;
const venda = 90;

custoTotal = custo * 1,20; //imposto de 20%
let lucro = venda - custoTotal;

if (custo < 0 || venda < 0){
    console.log('[ERRO]');
} else {
    console.log('A empresa terá um lucro total de ' + lucro*1000 + ' ao vender mil produtos.');
}