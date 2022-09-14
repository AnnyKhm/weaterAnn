import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Input } from '@angular/core';


@Component({
  selector: 'wa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log(12212);
    

  }
}
