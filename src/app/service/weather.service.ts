import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../common/weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  XRapidAPIKey: string = 'X-RapidAPI-Key';
  XRapidAPIKeyValue: string = '49b91184bbmsh58fd53a5a2f6f41p1773a4jsn25e326aac962';
  XRapidAPIHost: string = 'X-RapidAPI-Host';
  XRapidAPIHostValue: string = 'open-weather13.p.rapidapi.com';
  // private baseUrl = 'https://open-weather-map27.p.rapidapi.com/weather';
  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    const baseWeatherUrl: string = `https://open-weather13.p.rapidapi.com/city/${cityName}`;
    const headers = new HttpHeaders()
      .set(this.XRapidAPIKey, this.XRapidAPIKeyValue)
      .set(this.XRapidAPIHost,this.XRapidAPIHostValue);
    return this.http.get<WeatherData>(baseWeatherUrl, { headers });
  }

}

