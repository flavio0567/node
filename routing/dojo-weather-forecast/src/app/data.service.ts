import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  getWeather(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5a51323da2262aac4e627de5a8d679d8`).map( 
      data => data.json() ).toPromise();
  }

}