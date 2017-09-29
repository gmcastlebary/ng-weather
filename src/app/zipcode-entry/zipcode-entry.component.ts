import { Component, OnInit } from '@angular/core';
import {ZipdataService} from '../zipdata.service';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.css']
})
export class ZipcodeEntryComponent implements OnInit {

  zip;

  constructor(private zipDataService: ZipdataService) { }

  ngOnInit() {
  }

  addLocation(location: string) {
    this.zipDataService.addLocation(location);
  }

}
