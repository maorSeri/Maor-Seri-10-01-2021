import {Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {CityInfo} from '../../models/CityInfo';

@Component({
  selector: 'app-favorite-btn',
  templateUrl: './favorite-btn.component.html',
  styleUrls: ['./favorite-btn.component.css']
})
export class FavoriteBtnComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  city: CityInfo;
  favoriteCities: CityInfo[] = [];

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('FavoriteCities') ) {
      this.favoriteCities = JSON.parse(localStorage.getItem('FavoriteCities'));
      this.setBtnColor(this.isInFavorites());
    }
  }

  ngOnChanges(changes: SimpleChanges): void{
    if (changes.city) {
      this.setBtnColor(this.isInFavorites());
    }
  }

  addOrRemove(): void{
    const currantCity = this.city;
    const isFavorite = this.isInFavorites();
    if (isFavorite) {
      // Remove city from favorites.
      this.favoriteCities = this.favoriteCities.filter(function(city) { return city.Key !== currantCity.Key; });
    } else {
      this.favoriteCities.push(this.city);
    }
    this.setBtnColor(!isFavorite);
  }

  public setBtnColor(isFavorite: boolean): void{
    const btn = document.getElementById('button');
    if (isFavorite){
      btn.style.color = '#ff1493';
    } else{
      btn.style.color = '#ffc0cb';
    }
  }

  private isInFavorites(): boolean {
    const currantCity = this.city;
    return (this.favoriteCities.filter(function(city): boolean {
      return city.Key === currantCity.Key;
    }).length > 0);
  }

  ngOnDestroy(): void{
    localStorage.setItem('FavoriteCities', JSON.stringify(this.favoriteCities));
  }
}
