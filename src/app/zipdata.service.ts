import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class ZipdataService {

  zipList: string[] = [];

  constructor() { }

  addLocation(location: string) {
    console.log(location);
    this.zipList = this.zipList[this.zipList.length + 1];
    this.zipList[this.zipList.length] = location;
  }

  getList(): Observable<string[]> {
    return Observable.of( this.zipList );
    //return this.http.get<Person[]>("http://localhost:8080/persons.json");
  }
}
