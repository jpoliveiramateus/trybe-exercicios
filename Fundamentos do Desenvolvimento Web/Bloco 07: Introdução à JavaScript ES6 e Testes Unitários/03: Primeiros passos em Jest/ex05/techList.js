const techList = (tech, names) => {
  let result = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let newTech = [];
  newTech = tech.sort();
  newTech.forEach(function(i) {
    result.push({ tech: i, name: names });
  });
  return result;
}
module.exports = techList;