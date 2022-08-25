const express = require('express');
require('express-async-errors');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./middlewares/error');
const generateToken = require('./utils/generateToken');

const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');
const auth = require('./middlewares/auth');

app.use(express.json());
app.use(morgan('dev'));

app.use(auth, validateName, validatePrice, validateDescription, validateCreatedAt,
  validateRating, validateDifficulty);

app.post('/activities', (_req, res) => {
  res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
});

app.post('/signup', (req, res) => {
  const requiredProperties = ['email', 'password', 'firstName', 'phone'];

  if (!requiredProperties.every((property) => property in req.body)) {
    return res.status(401).json({ message: "Campos ausentes!" });
  }
  
  const token = generateToken();
  return res.status(200).json({ token });
});

app.use(errorHandler);

module.exports = app;