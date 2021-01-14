import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {TemperatureUnitService} from '../../services/temperature-unit.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isChecked = true;
  constructor(private temperatureUnitService: TemperatureUnitService) { }

  ngOnInit(): void {
  }

  changeUnitType(): void{
    if (this.isChecked){
      this.temperatureUnitService.setUnite('C');
    } else{
      this.temperatureUnitService.setUnite('F');
    }
  }
}
