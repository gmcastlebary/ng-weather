import { Component, OnInit } from '@angular/core';
import {ZipdataService} from "../zipdata.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-local-weather-list',
  templateUrl: './local-weather-list.component.html',
  styleUrls: ['./local-weather-list.component.css']
})
export class LocalWeatherListComponent implements OnInit {

  localWeathers: string[] = [];
  zipSub: Subscription;

  constructor(private zipDataService: ZipdataService) {
    this.zipSub = zipDataService.getList().subscribe( result => this.localWeathers = result, error => console.log(error));
  }

  ngOnInit() {
  }

}
