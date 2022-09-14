import { Component, OnInit} from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { FormControl } from '@angular/forms';
// import { zip } from 'rxjs';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'wa-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})

export class CurrentComponent implements OnInit {
  Max = "temp_max"
  Min = "temp_min"
  Name = "Sity Name"
  Temp = "temp"
  WeatherKind ="description"
  iconUrl = '';
  
  

  constructor(
    private weatherForecast: WeatherService,
    private formBuilder: FormBuilder,
    private forecastService: ForecastService
  ) { }


  ngOnInit(): void{}

  saveZip(zip: any) {
    if (localStorage.getItem('zip')) {
      const zips: any[] = JSON.parse(localStorage.getItem('zips') as string)
      zips.push(zip)
      localStorage.setItem('zips', JSON.stringify(zips))
    }

    localStorage.setItem('zips', JSON.stringify([zip]))
  }

  getCurrent(zipCode: any) {
    console.log(123456, zipCode);
    this.saveZip(zipCode)
    
    this.weatherForecast.localWeather(zipCode).subscribe({
      next: (data: any) => {
        console.log(data)
        this.Name = data.name
        this.Temp = data.main.temp
        this.Min = data.main.temp_min
        this.Max = data.main.temp_max
        this.WeatherKind = data.weather[0].description
        this.iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      }
    })

    this.forecastService.addZip(zipCode);
  
  }



}
