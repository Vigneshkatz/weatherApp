import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl = 'https://open-weather-map27.p.rapidapi.com/weather';
  constructor() { }
}
