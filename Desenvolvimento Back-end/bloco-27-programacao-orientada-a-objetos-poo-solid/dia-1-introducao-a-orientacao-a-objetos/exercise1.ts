class Student {
  matriculation: string;
  name: string;
  examsGrades: number[];
  worksGrades: number[];

  constructor(matriculation: string, name: string, examsGrades: number[], worksGrades: number[]) {
    this.matriculation = matriculation;
    this.name = name;
    this.examsGrades = examsGrades;
    this.worksGrades = worksGrades;
  }

  changeName(newName: string) {
    if (newName.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this.name = newName;
  }

  totalExamsGrade(): number {
    const total = this.examsGrades.reduce((total, grade) =>  total += grade, 0);
    return total;
  }

  averageExamsGrade(): number {
    const total = this.examsGrades.reduce((total, grade) =>  total += grade, 0);
    const average = total / this.examsGrades.length;
    return average;
  }
}

const personOne = new Student('202001011', 'Maria da Silva', [25, 20, 23, 23], [45, 45]);

console.log(personOne);
console.log('Nome da pessoa: ', personOne.name);
console.log('Soma de todas as notas: ', personOne.totalExamsGrade());
console.log('Média de todas as notas: ', personOne.averageExamsGrade());

personOne.changeName('João Pedro');
console.log('Nome da pessoa alterado: ', personOne.name);