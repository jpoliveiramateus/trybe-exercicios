function encode(phrase) {
  let a = phrase.replace(/a/g, '1');
  let e = a.replace(/e/g, '2');
  let i = e.replace(/i/g, '3');
  let o = i.replace(/o/g, '4');
  let u = o.replace(/u/g, '5');
  let result = u;
  return result;
}

function decode(phrase) {
  let a = phrase.replace(/1/g, 'a');
  let e = a.replace(/2/g, 'e');
  let i = e.replace(/3/g, 'i');
  let o = i.replace(/4/g, 'o');
  let u = o.replace(/5/g, 'u');
  let result = u;
  return result;
}

module.exports = {encode, decode};