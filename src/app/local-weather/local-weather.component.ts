import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-local-weather',
  templateUrl: './local-weather.component.html',
  styleUrls: ['./local-weather.component.css']
})
export class LocalWeatherComponent implements OnInit {

  @Input()
  zip: string;

  constructor() {
  }

  ngOnInit() {
  }

}
