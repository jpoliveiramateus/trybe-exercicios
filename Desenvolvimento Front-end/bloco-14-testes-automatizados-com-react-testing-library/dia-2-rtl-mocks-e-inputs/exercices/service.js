function randomNumber() {
  return Math.floor(Math.random() * (100 - 0) + 0);
}

wordCapsLock = (word) => word.toUpperCase();

firstLetter = (word) => word.substring(0, 1);

concatWords = (wordOne, wordTwo) => wordOne + wordTwo;

// fecthApiDog = async () => {
//   try {
//     const api = await fetch('https://dog.ceo/api/breeds/image/random');
//     const data = await api.json();
//     return data;
//   } catch (error) {
//     return error;
//   }
// }

async function fetchApiDog() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const json = await response
    .json();
  return await (
    response.ok ? Promise.resolve(json) : Promise.reject(json));
}

module.exports = { randomNumber, wordCapsLock, firstLetter, concatWords, fetchApiDog }
