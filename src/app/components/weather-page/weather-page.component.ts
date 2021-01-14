import {Component, OnInit} from '@angular/core';
import {CityInfo} from '../../modules/CityInfo';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit {

  public currantCity: CityInfo;
  constructor() { }

  ngOnInit(): void {
    if (history.state.data){
      this.currantCity = history.state.data.city;
    }else{
      this.currantCity = {LocalizedName: 'Tel Aviv', Key: 215854};
    }
  }

  setCity(city: CityInfo): void {
    this.currantCity = city;
  }
}
