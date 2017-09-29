import { Component, OnInit } from '@angular/core';
import {ZipdataService} from "../zipdata.service";

@Component({
  selector: 'app-local-weather',
  templateUrl: './local-weather.component.html',
  styleUrls: ['./local-weather.component.css']
})
export class LocalWeatherComponent implements OnInit {

  constructor(private zipDataService: ZipdataService) { }

  ngOnInit() {
  }

}
