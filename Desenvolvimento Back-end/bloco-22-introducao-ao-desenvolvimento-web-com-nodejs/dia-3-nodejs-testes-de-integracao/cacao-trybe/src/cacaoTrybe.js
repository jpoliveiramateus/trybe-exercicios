const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybeFile = async () => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacaoTrybeFile = async (content) => {
  try {
    const path = join(__dirname, '/files/cacaoTrybeFile.json');
    await fs.writeFile(path, JSON.stringify(content));
    console.log('Arquivo escrito com sucesso! =)');
  } catch (error) {
    console.error('Erro ao escrever o arquivo: ', error.path);
    return null;
  }
}

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getTotalChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const response = { totalChocolates: cacaoTrybe.chocolates.length }
  return response;
}

const findChocolateByName = async (query) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const chocolatesFiltered = cacaoTrybe.chocolates.filter((chocolate) => chocolate.name.toLowerCase()
    .includes(query.toLowerCase()));
  return chocolatesFiltered;
}

const putChocolateById = async ({ id, name, brandId }) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const error = { message: 'chocolate not found' };
  let updatedCacao = null;

  cacaoTrybe.chocolates.forEach((chocolate) => {
    if (chocolate.id === Number(id)) {
      chocolate.name = name;
      chocolate.brandId = brandId;
      updatedCacao = chocolate;
    }
  });

  if (updatedCacao) {
    writeCacaoTrybeFile(cacaoTrybe);
    return updatedCacao;
  }

  return error;
}

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    getTotalChocolates,
    findChocolateByName,
    putChocolateById
};