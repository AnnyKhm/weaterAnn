import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentWeather } from './current-weather';
import { zip } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class WeatherService {
  host = 'https://api.openweathermap.org/data/2.5'
  constructor(private http: HttpClient) { }

  localWeather(zip: string) {
    return this.http.get(`${this.host}/weather?q=${zip},us&appid=5a4b2d457ecbef9eb2a71e480b947604&units=metric`,)
  }

  WeatherForecast (zip: string) {
    return this.http.get(`${this.host}/forecast?q=${zip},us&appid=5a4b2d457ecbef9eb2a71e480b947604&units=metric`)
  }
}




