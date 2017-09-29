import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';
import {ZipdataService} from "./zipdata.service";
import {FormsModule} from "@angular/forms";
import { LocalWeatherComponent } from './local-weather/local-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    LocalWeatherComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ZipdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
