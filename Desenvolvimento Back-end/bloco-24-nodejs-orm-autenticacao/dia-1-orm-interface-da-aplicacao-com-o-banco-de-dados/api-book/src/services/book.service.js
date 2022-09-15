const { Sequelize } = require('sequelize');
const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [
      ['title', 'ASC'],
    ],
  });

  return books;
};

const getById = async (bookId) => {
  const book = await Book.findByPk(bookId);

  return book;
};

const createBook = async ({ title, author, pageQuantity, publisher }) => {
  const newBook = await Book.create({ title, author, pageQuantity, publisher });

  return newBook;
}

const updateBook = async (bookId, { title, author, pageQuantity, publisher }) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id: bookId } },
  );

  return updatedBook;
}

const removeBook = async (bookId) => {
  const book = await Book.destroy(
    { where: { id: bookId } },
  );

  return book;
}

const getByAuthor = async (authorName) => {
  // https://pt.stackoverflow.com/questions/355872/como-utilizar-o-like-do-sql-no-sequelize
  const Op = Sequelize.Op;

  const booksByAuthor = await Book.findAll(
    { where: { author: { [Op.like]: `%${authorName}%` } },
      order: [
        ['title', 'ASC'],
      ],
    },
  );

  return booksByAuthor;
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  removeBook,
  getByAuthor,
};
