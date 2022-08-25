const validateRating = (req, res, next) => {
  const { rating } = req.body.description;

  if (!Number.isInteger(rating) || rating > 5 || rating < 1) {
    return res.status(400).json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' })
  }

  next();
}

module.exports = validateRating;