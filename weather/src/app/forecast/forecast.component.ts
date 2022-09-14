import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormBuilder, FormGroup } from '@angular/forms';
/*import { ForecastService } from '../forecasr.service';*/
import { FormControl } from '@angular/forms';
import { zip } from 'rxjs';
import { ForecastService } from '../forecast.service';


@Component({
  selector: 'wa-forcast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  Max = "temp_max"
  Min = "temp_min"
  Name = "Sity Name"
  Temp = "temp"
  WeatherKind ="description"
  iconUrl = '';
  // @ts-ignore
  weatherForecastData:any[] = []
  
  zipCode!: string;

  constructor(
    private weatherForecast: WeatherService,
    private formBuilder: FormBuilder,
    private forecastService: ForecastService

  ) { }


  ngOnInit(): void{
    const zips = this.forecastService.getZip()
    for (const zip of zips) {
      this.getCurrent(zip); //2
    }
   
  }

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
    
    this.weatherForecast.WeatherForecast(zipCode).subscribe({
      next: (data: any) => {
        // @ts-ignore
        this.weatherForecastData = data.list.slice(0, 5).map(weather => {
          return {
            Name: data.city.name,
            Temp: weather.main.temp,
            Min: weather.main.temp_min,
            Max: weather.main.temp_max,
            WeatherKind: weather.weather[0].description,
            iconUrl: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
          }
        });
        console.log(data)
        
      }
    })

    console.log(555, this.Name);
    
  }
}

//2