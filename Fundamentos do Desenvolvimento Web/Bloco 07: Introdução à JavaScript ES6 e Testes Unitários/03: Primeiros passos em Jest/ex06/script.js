const hydrate = (phrase) => {
  let r = /\d+/g;
  let result = phrase.match(r);
  let resultConvert = [];
  result.forEach(function(i) {
    resultConvert.push(parseInt(i, 0));
  });
  let resultNew = 0;
  resultConvert.forEach(function(i) {
    resultNew += i;
  });
  if (resultNew > 1) {
    return`${resultNew} copos de água`;
  }
  return `${resultNew} copo de água`;
}
module.exports = hydrate;