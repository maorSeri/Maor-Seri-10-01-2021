import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherPageComponent} from './components/weather-page/weather-page.component';
import {FavoritesPageComponent} from './components/favorites-page/favorites-page.component';


const routes: Routes = [
  {path: 'home', component: WeatherPageComponent},
  {path: 'favorites', component: FavoritesPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
