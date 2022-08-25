const validateDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description;
  const difficulties = ["Fácil", "Médio", "Difícil"];

  // !difficulties.includes(difficulty)
  if (!difficulties.some((dif) => dif === difficulty)) {
    return res.status(400).json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
  }

  next();
}

module.exports = validateDifficulty;