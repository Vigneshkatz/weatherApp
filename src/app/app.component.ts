
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { WeatherData } from './common/weather-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  weatherData: WeatherData | undefined;
  constructor(private weatherService: WeatherService) {

  }
  ngOnInit(): void {
    this.weatherService.getWeatherData('New Delhi').subscribe(
      {
        next: (response) => {
          console.log(response);
          console.log(response.main);
          this.weatherData = response;
        }
      }
    );
  }
}
