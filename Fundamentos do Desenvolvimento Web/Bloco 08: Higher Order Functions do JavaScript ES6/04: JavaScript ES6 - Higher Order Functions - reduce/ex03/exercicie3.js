const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((count, value) => {
    return value.split('').reduce((acc, letter) => {
      if (letter.includes('a') === true || letter.includes('A') === true) {
        acc += 1
      }
      return acc;
    }, 0) + count;
  }, 0);
}
console.log(containsA());
