const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
};

const watchClasses = () => {
  let result = 0;
  for (let i in allLessons) {
    if (allLessons[i].materia === 'Matemática') {
      result += allLessons[i].numeroEstudantes;
    }
  }
  return console.log(`${result} estudantes assistiram a aula de matemática.`);
}
// watchClasses();

const createReport = (object, teacher) => {
  const result = {};
  result.professor = teacher;
  const matter = [];
  let students = 0;
  for (let i in object) {
    if (object[i].professor === teacher) {
      matter.push(object[i].materia);
      students += object[i].numeroEstudantes;
    }
  }
  result.aulas = matter;
  result.estudantes = students;
  return result;
}
// console.log(createReport(allLessons, 'Carlos'));
// console.log(createReport(allLessons, 'Maria Clara'));