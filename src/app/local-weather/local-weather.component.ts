import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-local-weather',
  templateUrl: './local-weather.component.html',
  styleUrls: ['./local-weather.component.css']
})
export class LocalWeatherComponent implements OnInit {

  weatherData;

  @Input()
  zip: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeatherFor(this.zip).subscribe( result => this.weatherData = result);
  }
}
