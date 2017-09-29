import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-local-weather-list',
  templateUrl: './local-weather-list.component.html',
  styleUrls: ['./local-weather-list.component.css']
})
export class LocalWeatherListComponent implements OnInit {

  activeZips: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onNewZipCode(newZip: string) {
    this.activeZips.push(newZip);
  }

}
