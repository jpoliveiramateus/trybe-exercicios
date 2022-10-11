import IEmployee from "./IEmployee";
import Person from "./Person";
import Student from './Student';
import Subject from './Subject';
import Teacher from "./Teacher";

const maria = new Person('Maria da Consolação', new Date('2002/10/25'));

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));

const testInterfaceEmployee: IEmployee = {
  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  },
};

const math = new Subject('Matemática');

const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, math);

console.log(joao);