const BookService = require('../services/book.service');

const getAll = async (req, res) => {
  const { author } = req.query;
  try {
    if (author) {
      const booksByAuthor = await BookService.getByAuthor(author);
      if (!booksByAuthor) return res.status(404).json({ message: 'Livro não encontrado!' });
      return res.status(200).json(booksByAuthor);
    }

    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookService.getById(id);
    if (!book) return res.status(404).json({ message: 'Livro não encontrado!' });
    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = await BookService.createBook(req.body);

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBook = await BookService.updateBook(id, req.body);

    if (!updatedBook) return res.status(404).json({ message: 'Livro não encontrado!' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
}

const removeBook = async (req, res) => {
  const { id } = req.params;
  try {
    const removedBook = await BookService.removeBook(id);

    if (!removedBook) return res.status(404).json({ message: 'Livro não encontrado!' });

    return res.status(200).json({ message: 'Livro removido com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  removeBook,
};
