import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';
import {FormsModule} from "@angular/forms";
import { LocalWeatherComponent } from './local-weather/local-weather.component';
import { LocalWeatherListComponent } from './local-weather-list/local-weather-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    LocalWeatherComponent,
    LocalWeatherListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
