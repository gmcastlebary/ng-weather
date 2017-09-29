import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-local-weather',
  templateUrl: './local-weather.component.html',
  styleUrls: ['./local-weather.component.css']
})
export class LocalWeatherComponent implements OnInit, OnDestroy {

  weatherData;
  subscription: Subscription;

  @Input()
  zip: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.subscription = this.weatherService.getWeatherFor(this.zip).subscribe( result => this.weatherData = result, error => console.log(error));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
