import { Component, OnInit } from '@angular/core';
import {ZipdataService} from '../zipdata.service';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.css']
})
export class ZipcodeEntryComponent implements OnInit {

  constructor(zipDataService: ZipdataService) { }

  ngOnInit() {
  }

}
