import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(newEnrollment: string) {
    if (newEnrollment.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this._enrollment = newEnrollment;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(newExamsGrades: number[]) {
    if (newExamsGrades.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');

    this._examsGrades = newExamsGrades;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(newWorksGrades: number[]) {
    if (newWorksGrades.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');

    this._worksGrades = newWorksGrades;
  }

  sumGrades(): number {
    const totalExamsGrades = this.examsGrades.reduce((total, grade) => total += grade, 0);
    const totalWorksGrades = this.worksGrades.reduce((total, grade) => total += grade, 0);

    const totalSumOfGrades = totalExamsGrades + totalWorksGrades;

    return totalSumOfGrades;
  }

  sumAverageGrade(): number {
    const totalSumOfGrades = this.sumGrades();

    const totalGradesLength = this.examsGrades.length + this.worksGrades.length;

    const averageGrade = totalSumOfGrades / totalGradesLength;

    return averageGrade;
  }

  //esse método gera um id de inscrição aleatório baseado na data de cadastro da pessoa estudante
  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}