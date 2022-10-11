import Person from './Person';
import IEmployee from './IEmployee';
import Subject from './Subject';

export default class Teacher extends Person implements IEmployee {
  private _subject: Subject;
  private _registration: string;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, private _salary: number, subject: Subject) {
    super(name, birthDate);

    this.salary = _salary;
    this._subject = subject;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }

  get salary(): number {
    return this._salary;
  }

  set salary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error('O salário não pode ser negativo');
    }

    this._salary = newSalary;
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');

    this._registration = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

    this._admissionDate = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}