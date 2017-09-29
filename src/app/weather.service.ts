import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class WeatherService {

  baseUrl = "http://api.openweathermap.org/data/2.5/weather";
  appID = "6d11309c28195181bc968b478d118c78";
  constructor(private http: HttpClient) { }

  getWeatherFor(zipCode: string) {
    let params: HttpParams = new HttpParams().append('zip', zipCode + ',us').append('units', 'imperial')
      .append('APPID', this.appID);
    return this.http.get(this.baseUrl, {params: params} );
  }
}
