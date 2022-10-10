class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    const dateStr = `${year}-${month}-${day}`;

    const dateIsNotValid = new Date(dateStr).getDate() !== day

    if (dateIsNotValid) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = day;
      this._month = month;
      this._year = year;
    }
  }

  public get day(): number {
    return this._day;
  }

  public set day(value: number) {
    this._day = value;
  }

  public get month(): number {
    return this._month;
  }

  public set month(value: number) {
    this._month = value;
  }

  public get year(): number {
    return this._year;
  }

  public set year(value: number) {
    this._year = value;
  }

  getMonthName(): string {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    return months[this.month - 1];
  }

  // https://www.javascriptprogressivo.net/2018/12/Ano-Bissexto-JavaScript-Validar.html#:~:text=if(%20(ano%400%20%3D%3D,%C3%89%20bissexto%22%3B%20else%20resposta.
  isLeapYear(): boolean {
    if (this._year % 400 === 0) {
      return true;
    } else {
      if (this._year % 4 === 0 && this._year % 100 !== 0) {
        return true
      }

      return false;
    }
  }

  compare(date: Data): number {
    const currentDateStr = `${this.year}-${this.month}-${this.day}`;

    const dateStr = `${date.year}-${date.month}-${date.day}`;

    if (new Date(currentDateStr) > new Date(dateStr)) return 1;
    if (new Date(currentDateStr) < new Date(dateStr)) return -1;

    return 0;
  }

  // course
  format(formatting: string): string {
    const conditions: boolean[] = [
      (!formatting.match(/a{2,4}/g)), // verifica se possui o ano na formatação
      (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)), // verifica se tem o mês na formatação
      (!formatting.match(/d{2}/g)), // verifica se tem o dia na formatação
    ];

    if (conditions.every((cond) => cond)) {
      throw new Error(`O formato passado é inválido: ${formatting}`);
    }

    const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
    const month = this.month > 9 
      ? this.month.toString() 
      : `0${this.month.toString()}`;
    const year = this.year.toString();

    const dateFormatting = formatting
      .replace('dd', day).replace('mm', month)
      .replace('M', this.getMonthName()).replace('aaaa', year)
      .replace('aa', year.substr(-2));

    return dateFormatting;
  }
}

const testDate = new Data(29, 1, 1989);

console.log(testDate);
console.log(testDate.getMonthName());
console.log('O ano é bissexto ?', testDate.isLeapYear() ? 'sim' : 'não');

const otherDate = new Data(29, 1, 1989);
const compared = testDate.compare(otherDate);
const compareStates = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));