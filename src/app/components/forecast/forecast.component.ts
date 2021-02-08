import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CityInfo} from '../../models/CityInfo';
import {DailyForecasts} from '../../models/DailyForecasts';
import {WeatherService} from '../../services/weather.service';
import {ToastrService} from 'ngx-toastr';
import {TempInfo} from '../../models/TempInfo';
import {TemperatureUnitService} from '../../services/temperature-unit.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit, OnChanges {
  @Input()
  city: CityInfo;
  public fiveDay: DailyForecasts;
  unit: string;


  constructor(private weatherService: WeatherService,
              private toastr: ToastrService,
              private temperatureUnitService: TemperatureUnitService) { }

  ngOnInit(): void {
    this.getCityForecastInfo();
    this.temperatureUnitService.unit.subscribe(updatedUnit => {
      this.unit = updatedUnit;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.city){
      this.getCityForecastInfo();
    }
  }

  getDayFromDate(date: string): string{
    return new Date(date).toLocaleString('en-us', {  weekday: 'long' });
  }

  getCityForecastInfo(): void{
    this.weatherService.getFiveDayWeather(this.city.Key)
      .subscribe(temp => {
          this.fiveDay = temp;
        } , error => {
        this.toastr.info('Sever Error');
    }
      );
  }

  getMinValue(day: TempInfo): number{
    if (this.unit === 'C'){
      return Math.round((day.Temperature.Minimum.Value - 32)  * 5 / 9);
    }
    return day.Temperature.Minimum.Value;
  }

  getMaxValue(day: TempInfo): number{
    if (this.unit === 'C'){
      return Math.round((day.Temperature.Maximum.Value - 32) * 5 / 9);
    }
    return day.Temperature.Maximum.Value;
  }

}
