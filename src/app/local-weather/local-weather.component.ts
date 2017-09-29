import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-weather',
  templateUrl: './local-weather.component.html',
  styleUrls: ['./local-weather.component.css']
})
export class LocalWeatherComponent implements OnInit {

  zipcode: string;

  constructor(zipcode: string) {
    this.zipcode = zipcode;
  }

  ngOnInit() {
  }

}
