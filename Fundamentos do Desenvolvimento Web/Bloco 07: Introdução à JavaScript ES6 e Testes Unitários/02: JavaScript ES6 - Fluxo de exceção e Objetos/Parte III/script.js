const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (object, key, value) => {
  object[key] = value;
  return object;
}
addTurn(lesson2, 'turno', 'noite');

const keysObject = object => Object.keys(object);
// console.log(keysObject(lesson2));

const lengthObject = object => Object.keys(object).length;
// console.log(lengthObject(lesson2));

const valuesObject = object => Object.values(object);
// console.log(valuesObject(lesson3));

const allLessons = {};
allLessons.lesson1 = lesson1;
allLessons.lesson2 = lesson2;
allLessons.lesson3 = lesson3;
// console.log(allLessons);

const totalStudents = (object) => {
  let total = object.lesson1.numeroEstudantes + object.lesson2.numeroEstudantes + object.lesson3.numeroEstudantes;
  return `Número total de estudantes: ${total}.`;
}
// console.log(totalStudents(allLessons));

const getValueByNumer = (key, number) => {
  if (key === 'lesson1') {
    return 'Output: ' + Object.values(allLessons.lesson1)[number];
  } else if (key === 'lesson2') {
    return 'Output: ' + Object.values(allLessons.lesson2)[number];
  } else {
    return 'Output: ' + Object.values(allLessons.lesson3)[number];
  }
}
// console.log(getValueByNumer(lesson2, 2));

const verifyPair = (object, key, value) => {
  let test = 0;
  for (let i in object) {
    if (key === i && value === lesson3[i]) {
      test += 1;
    }
  }
  if (test === 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}
// verifyPair(lesson1, 'turno', 'noite');
