import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, finalize, switchMap, tap} from 'rxjs/operators';
import {WeatherService} from '../../services/weather.service';
import {CityInfo} from '../../modules/CityInfo';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filteredCities: CityInfo[] = [];
  usersForm: FormGroup;
  isLoading = false;
  @Output()
  eventCityChosen = new EventEmitter();


  constructor(private fb: FormBuilder, private weatherService: WeatherService, private toast: ToastrService) {}

  ngOnInit(): void {
    // sets the input to null
    this.usersForm = this.fb.group({
      userInput: 'null'
    });
    this.usersForm
      .get('userInput')
      .valueChanges
      .pipe(
        debounceTime(300),
        tap(() => this.isLoading = true),
        switchMap(inputTxt => this.weatherService.getAutoCompleteCityName(inputTxt)
          .pipe(
            finalize(() => this.isLoading = false),
          )
        )
      )
      .subscribe(cities => this.filteredCities = cities
      , error => this.toast.info('Server Error'));
  }

  displayFn(city: CityInfo): string {
    if (city) {
      return city.LocalizedName;
    }
  }

  onChangeOfCity = (city: CityInfo) => {
    city = {LocalizedName: city.LocalizedName, Key: city.Key};
    this.eventCityChosen.emit(city);
  }

}
