const fs = require('fs').promises;
const { join } = require('path');

const writeUserFile = async (content) => {
  const path = '../models/data/users.json';
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(content));
  } catch (error) {
    return console.error('Erro ao escrever arquivo:', error.path);
  }
};

const readUserFile = async () => {
  const path = '../models/data/users.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return console.error('Erro ao ler arquivo:', error.path);
  }
};

const findUser = async (userName) => {
  const users = await readUserFile();
  const user = users.find(({ username }) => username === userName);
  if (!user) {
    return false;
  }
  return true;
};

module.exports = {
  findUser,
};