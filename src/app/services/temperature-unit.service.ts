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
      this.unit.next(toUnit);
    }else{
      this.unit.next(toUnit);
    }

  }
}

