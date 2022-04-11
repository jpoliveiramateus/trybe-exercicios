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

function formatedBookNames() {
  // escreva seu código aqui
  return books.map((value) => `${value.name} - ${value.genre} - ${value.author.name}`);
}
// console.log(formatedBookNames());

function nameAndAge() {
  // escreva seu código aqui
  const result = books.map((value) => ({author: `${value.author.name}`, age: `${value.releaseYear - value.author.birthYear}`}));
  return result.sort((a, b) => a.age - b.age);
}
// console.log(nameAndAge());

function fantasyOrScienceFiction() {
  // escreva seu código aqui
  return books.filter((value) => value.genre === 'Fantasia' || value.genre === 'Ficção Científica');
}
// console.log(fantasyOrScienceFiction());

function oldBooksOrdered() {
  // escreva seu código aqui
  const result = books.filter((value) => 2022 - value.releaseYear > 60);
  return result.sort((a, b) => a.releaseYear - b.releaseYear);
}
// console.log(oldBooksOrdered());

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const result = books.filter((value) => value.genre === 'Fantasia' || value.genre === 'Ficção Científica').map((value) => value.author.name);
  return result.sort();
}
// console.log(fantasyOrScienceFictionAuthors());

function oldBooks() {
  // escreva seu código aqui
  return books.filter((value) => 2022 - value.releaseYear > 60).map((value) => value.name);
}
// console.log(oldBooks());

function authorWith3DotsOnName() {
  // escreva seu código aqui
  return books.find((value) => value.author.name.split(' ').filter((value) => value.endsWith('.')).length === 3).name;
}
console.log(authorWith3DotsOnName());
