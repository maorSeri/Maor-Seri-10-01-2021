import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CityInfo} from '../models/CityInfo';
import {DailyForecasts} from '../models/DailyForecasts';
import {CurrantWeather} from '../models/CurrantWeather';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/jason'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apikey = 'GPjX71JBgyaWOYFGqovG5SvOsCXSMGmn';
  accuweatherURL = 'http://dataservice.accuweather.com/';
  language = '&language=en-us';
  constructor(private http: HttpClient) { }

  getAutoCompleteCityName(txt: any): Observable<CityInfo[]>{
    const autocompleteURL = 'locations/v1/cities/autocomplete';
    const url = `${this.accuweatherURL}${autocompleteURL}?apikey=${this.apikey}&q=${txt}${this.language}`;
    return this.http.get<CityInfo[]>(url);
  }

  getFiveDayWeather(cityKey: number): Observable<DailyForecasts>{
    const fiveDaysURL = 'forecasts/v1/daily/5day/';
    const url = `${this.accuweatherURL}${fiveDaysURL}${cityKey}?apikey=${this.apikey}`;
    return this.http.get<DailyForecasts>(url);
  }

  getCurrantWeather(cityKey: number): Observable<CurrantWeather>{
    const currantWeatherURL = 'currentconditions/v1/';
    const url = `${this.accuweatherURL}${currantWeatherURL}${cityKey}?apikey=${this.apikey}`;

    return  this.http.get<CurrantWeather>(url);
  }

}
