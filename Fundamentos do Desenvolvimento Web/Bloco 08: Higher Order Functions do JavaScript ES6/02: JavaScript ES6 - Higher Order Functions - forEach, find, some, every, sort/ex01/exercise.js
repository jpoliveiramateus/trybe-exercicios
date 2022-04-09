const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

function authorBornIn1947() {
  return books.find((value) => value.author.birthYear === 1947).author.name;
}
// console.log(authorBornIn1947());

function smallerName() {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  books.forEach((value) => {
    if (value.name.length < nameBook.length) {
      nameBook = value.name;
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
// console.log(smallerName());

function getNamedBook() {
  // escreva seu código aqui
  return books.find((value) => value.name.length === 26).name;
}
// console.log(getNamedBook());

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}
// console.log(booksOrderedByReleaseYearDesc());

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((value) => value.author.birthYear > 1901 && value.author.birthYear < 2000);
}
// console.log(everyoneWasBornOnSecXX());

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  const result = books.find((value) => value.releaseYear >= 1980 && value.releaseYear <= 1989);
  if (result === undefined) {
    return false;
  }
  return expectedResult;
}
// console.log(someBookWasReleaseOnThe80s());

let result = false;

function authorUnique() {
  // escreva seu código aqui
  books.forEach((value, index) => {
    const nextValue = books[index + 1];
    if (nextValue === undefined) {
      return;
    }
    if (value.author.birthYear === nextValue.author.birthYear) {
      result = true;
    }
  });
  return result;
}
// console.log(authorUnique());
