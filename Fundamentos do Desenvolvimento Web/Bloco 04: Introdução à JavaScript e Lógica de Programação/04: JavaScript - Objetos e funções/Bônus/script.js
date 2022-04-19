let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

const arrayOfNumbers = (array) => {
  const teste = [];
  vector.forEach((value, i) => teste.push(...array[i]));
  return teste.filter((value) => value % 2 === 0);
}
// console.log(arrayOfNumbers(vector));

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

let count = 0;
let melancia = [];
let banana = [];
let abacate = [];
let uva = [];
let pera = [];
let laranja = [];
let jaca = [];

const result = basket.reduce((acc, fruta) => {
  if (fruta === 'Melancia') {
    melancia.push(fruta);
    acc[fruta] = melancia.length;
  } else if (fruta === 'Banana') {
    banana.push(fruta);
    acc[fruta] = banana.length;
  } else if (fruta === 'Abacate') {
    abacate.push(fruta);
    acc[fruta] = abacate.length;
  } else if (fruta === 'Uva') {
    uva.push(fruta);
    acc[fruta] = uva.length;
  } else if (fruta === 'Pera') {
    pera.push(fruta);
    acc[fruta] = pera.length;
  } else if (fruta === 'Laranja') {
    laranja.push(fruta);
    acc[fruta] = laranja.length;
  } else if (fruta === 'Jaca') {
    jaca.push(fruta);
    acc[fruta] = jaca.length;
  }
  return acc;
}, {});

const mensage = (obj) => {
  let result = ``;
  result = `Sua cesta possui: ${obj.Melancia} Melancias, ${obj.Abacate} Abacates, ${obj.Uva} Uvas, ${obj.Laranja} Laranjas, ${obj.Jaca} Jacas, ${obj.Pera} Peras, ${obj.Banana} Bananas.`;
  return result;
}
// console.log(mensage(result));
// console.log(result);


let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

const { blocoDois } = moradores;
const { nome, sobrenome, andar, apartamento } = blocoDois[1];

// console.log(`O morador do bloco 2 de nome ${nome} ${sobrenome} mora no ${andar}º andar, apartamento ${apartamento}.`);

for (let  i = 0; i < moradores.blocoUm.length; i += 1) {
  console.log(moradores.blocoUm[i].nome + ' ' + moradores.blocoUm[i].sobrenome);
}

for (let  i = 0; i < moradores.blocoDois.length; i += 1) {
  console.log(moradores.blocoDois[i].nome + ' ' + moradores.blocoDois[i].sobrenome);
}
