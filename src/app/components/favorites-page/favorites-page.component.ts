import {Component, OnInit} from '@angular/core';
import {CityInfo} from '../../modules/CityInfo';
import {WeatherService} from '../../services/weather.service';
import {FavoriteInfoDisplay} from '../../modules/FavoriteInfoDisplay';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {TemperatureUnitService} from '../../services/temperature-unit.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  favoriteCities: CityInfo[];
  currantWeather: FavoriteInfoDisplay[];
  unit: string;
  constructor(private weatherService: WeatherService, private router: Router, private toastr: ToastrService,
              private temperatureUnitService: TemperatureUnitService) { }

  ngOnInit(): void {
    this.currantWeather = [];
    this.favoriteCities = JSON.parse(localStorage.getItem('FavoriteCities'));
    for (const city of this.favoriteCities){
      this.weatherService.getCurrantWeather(city.Key)
        .subscribe(currant => {
          this.currantWeather.push(
              { City: city,
                TemperatureF: currant[0].Temperature.Imperial.Value,
                TemperatureC: currant[0].Temperature.Metric.Value,
                WeatherText: currant[0].WeatherText});
          }, error => {
          this.toastr.info('Sever Error');
          }
        );
    }
    this.temperatureUnitService.unit.subscribe(updatedUnit => {
      this.unit = updatedUnit;
    });
  }

  showForecast(city: CityInfo): void{
    this.router.navigate(['/home'],  {state: {data: {city}}});
  }
  getTemperature(city: FavoriteInfoDisplay): number{
    if (this.unit === 'C'){
      return city.TemperatureC;
    }
    return city.TemperatureF;
  }

}
