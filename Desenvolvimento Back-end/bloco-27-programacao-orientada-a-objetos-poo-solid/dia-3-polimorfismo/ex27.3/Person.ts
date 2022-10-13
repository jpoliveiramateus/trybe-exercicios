export default abstract class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  get name(): string {
    return this._name;
  }
  
  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error('Erro o nome deve conter no mínimo 3 caracteres');
    }

    this._name = newName;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  // https://codepen.io/Eziquiel/pen/jBLpmX?editors=0010
  private calculateAge() {
    const dob = this.birthDate;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const birthdayThisYear = new Date(currentYear, dob.getMonth(), dob.getDate());
    let age = currentYear - dob.getFullYear();

    if (birthdayThisYear > currentDate) {
      age -= 1;
    }

    return age;
  }

  set birthDate(newDate: Date) {
    if (newDate.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }

    const age = this.calculateAge();

    if (age > 120) {
      throw new Error('A pessoa não pode possuir mais de 120 anos');
    }

    this._birthDate = newDate;
  }
}