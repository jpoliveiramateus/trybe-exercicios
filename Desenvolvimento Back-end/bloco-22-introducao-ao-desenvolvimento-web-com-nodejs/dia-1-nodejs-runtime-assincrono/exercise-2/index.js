const fs = require('fs').promises;
var readlineSync = require('readline-sync');

const simpsons = 'simpsons.json';

const readAllFiles = async () => {
  try {
    const data = await fs.readFile(simpsons, 'utf-8');
    const info = JSON.parse(data);
    info.forEach(({id, name}) => console.log(`${id} - ${name}`));
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.path}`);
    console.log(err);
  }
}
// readAllFiles();

const readCharacters = async () => {
  const data = await fs.readFile(simpsons, 'utf-8');
  const info = JSON.parse(data);
  return info;
} 

const findCharacterById = () => {
  return new Promise(async (resolve, reject) => {
    const info = await readCharacters();
    const id = readlineSync.questionInt('Character id: ');
    const character = info.find((character) => parseInt(character.id) === id);
    if (!character) {
      return reject(new Error('Id not found'));
    }
    resolve(character.name);
  });
}

const returnCharacter = async () => console.log(await findCharacterById());
// returnCharacter();

const removeCharacterId = async () => {
  const info = await readCharacters();
  const characters = info.filter((character) => character.id !== '10' && character.id !== '6');
  try {
    await fs.writeFile(simpsons, JSON.stringify(characters));
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}
// removeCharacterId();

const newFileSimpsons = async () => {
  const info = await readCharacters();
  const characters = info.filter((character) => parseInt(character.id) < 5);
  try {
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(characters));
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}
// newFileSimpsons();

const addNewCharacter = async () => {
  const info = await readCharacters();
  const character = info.find(({ name }) => name === 'Nelson Muntz');

  const simpsonsFamilyFile = await fs.readFile('simpsonsFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(simpsonsFamilyFile);
  simpsonsFamily.push(character);

  try {
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}
// addNewCharacter();

const replaceCharacter = async () => {
  const simpsonsFamilyFile = await fs.readFile('simpsonsFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(simpsonsFamilyFile);
  const removeCharacter = simpsonsFamily.filter(({ name }) => name !== 'Nelson Muntz');
  removeCharacter.push({ id: '5', name: 'Maggie Simpson' });

  try {
    await fs.writeFile('simpsonsFamily.json', JSON.stringify(removeCharacter));
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escreve arquivo: ${err.message}`);
  }
}
// replaceCharacter();