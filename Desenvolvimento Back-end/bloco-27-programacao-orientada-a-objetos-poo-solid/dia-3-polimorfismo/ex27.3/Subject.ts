export default class Subject {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this.validateName(newName);
    this._name = newName;
  }

  private validateName(value: string): void {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }
}