interface Car {
  _brand: string,
  _color: string,
  _doors: number,
}

class Car {
  
  constructor(brand: string, color: string, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

  honk(): void {
    return console.log('Biiiiiii');
  }

  turnOn(): void {
    return console.log('Carro ligado');
  }

  turnOff(): void {
    return console.log('Carro desligado');
  }

  speedUp(): void {
    return console.log('Acelerando');
  }

  speedDown(): void {
    return console.log('Reduzindo a velocidade');
  }

  stop(): void {
    return console.log('Carro parado');
  }

  turn(dir: string): void {
    return console.log(`Virando na direção: ${dir}`);
  }
}

export default Car;