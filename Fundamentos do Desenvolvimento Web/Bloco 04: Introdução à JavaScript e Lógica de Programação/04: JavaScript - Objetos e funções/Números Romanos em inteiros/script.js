const romanToNum = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

const convertRomanInteger = (s) => {
  let result = 0;

  s.split('').forEach((num, i) => {
    if (romanToNum[num] < romanToNum[s[i + 1]]) result -= romanToNum[num];
    else result += romanToNum[num];
  });

  return result;
}

console.log(convertRomanInteger('MMXVIII'));
console.log(convertRomanInteger('VI'));
console.log(convertRomanInteger('IV'));
