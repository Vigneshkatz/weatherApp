import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // private baseUrl = 'https://open-weather-map27.p.rapidapi.com/weather';
  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    
  const baseWeatherUrl :string= `https://open-weather13.p.rapidapi.com/city/${cityName}`;

    this.http.get(baseWeatherUrl), {
      header: new HttpHeaders()
        .set(environment.XRapidAPIKey, environment.XRapidAPIKey)
        .set(environment.XRapidAPIHost, environment.XRapidAPIHostValue)
    }
  }
}
