import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchComponent} from './components/search/search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import {FavoritesPageComponent} from './components/favorites-page/favorites-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ForecastComponent} from './components/forecast/forecast.component';
import {FavoriteBtnComponent} from './components/favorite-btn/favorite-btn.component';
import {WeatherPageComponent} from './components/weather-page/weather-page.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavBarComponent,
    FavoritesPageComponent,
    ForecastComponent,
    FavoriteBtnComponent,
    WeatherPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
