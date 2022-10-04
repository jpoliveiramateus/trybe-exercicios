"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
        this._brand = brand;
        this._color = color;
        this._doors = doors;
    }
    honk() {
        return console.log('Biiiiiii');
    }
    turnOn() {
        return console.log('Carro ligado');
    }
    turnOff() {
        return console.log('Carro desligado');
    }
    speedUp() {
        return console.log('Acelerando');
    }
    speedDown() {
        return console.log('Reduzindo a velocidade');
    }
    stop() {
        return console.log('Carro parado');
    }
    turn(dir) {
        return console.log(`Virando na direção: ${dir}`);
    }
}
exports.default = Car;
