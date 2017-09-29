import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.css']
})
export class ZipcodeEntryComponent implements OnInit  {

  @Output()
  onNewZipCode = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addLocation(location: string) {
    this.onNewZipCode.emit(location);
  }

}
