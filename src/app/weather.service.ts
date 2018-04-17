import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Forecast } from './forcast';
@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {

   }

  getWeatherFor5Days(location: string) {

   return this.http.get(
  `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=2f54db498238ca498d6c732647aa16fc&units=imperial`);
  }
}
