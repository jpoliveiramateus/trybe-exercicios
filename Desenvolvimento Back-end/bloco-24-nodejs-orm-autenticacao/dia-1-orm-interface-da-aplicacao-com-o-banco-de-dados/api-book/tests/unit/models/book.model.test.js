const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../../src/models/book.model');

describe('O model de User', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('possui o nome "Book"', () => {
    checkModelName(Book)('Book');
  });

  describe('possui as propriedades corretas', () => {
    const properties = ['title', 'author', 'pageQuantity', 'createdAt', 'updatedAt', 'publisher'];
    properties.forEach(checkPropertyExists(book));
  });
});