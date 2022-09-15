const express = require('express');

const Book = require('./controllers/book.controller');

const app = express();

app.use(express.json());

app.delete('/books/:id', Book.removeBook);

app.put('/books/:id', Book.updateBook);

app.get('/books/:id', Book.getById);

app.post('/books', Book.createBook);

app.get('/books', Book.getAll);

module.exports = app;