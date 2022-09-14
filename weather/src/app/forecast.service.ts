import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ForecastService {
  zipCode!: string;

  constructor() { }

  addZip (zip: string) {
    this.zipCode = zip;
    console.log(this.zipCode, 9999);
    return this.zipCode;
  }

  getZip(){
    return JSON.parse(localStorage.getItem('zips') as string)
  }

}
