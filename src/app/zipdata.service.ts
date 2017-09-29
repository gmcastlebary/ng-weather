import { Injectable } from '@angular/core';

@Injectable()
export class ZipdataService {

  constructor() { }

  addLocation(location: string) {
    console.log(location);
  }
}
