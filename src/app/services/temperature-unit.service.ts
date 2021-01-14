import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureUnitService {
  unit = new BehaviorSubject('F');
  constructor() { }
  setUnite(toUnit: string): void {
    if (toUnit === 'C'){
      /*this.temperature.next((temperature - 32) * 5 / 9);*/
      this.unit.next(toUnit);
    }else{
      /*this.temperature.next(temperature * 9 / 5 + 32);*/
      this.unit.next(toUnit);
    }

  }
}

