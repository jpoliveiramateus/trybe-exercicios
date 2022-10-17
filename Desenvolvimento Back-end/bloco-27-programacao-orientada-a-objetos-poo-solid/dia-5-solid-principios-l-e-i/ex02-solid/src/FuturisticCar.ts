import { IAirPlane, ICar } from './interfaces';

export default class FuturisticCar implements ICar, IAirPlane {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}
