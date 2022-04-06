function techList(tech, names) {
  let result = [];
  if (tech.length === 0 || names.length === 0) {
    return 'Vazio!';
  }
  result.push({ tech: tech, name: names });
  return result;
}
module.exports = techList;
// console.log(techList('Java', 'João Pedro'));