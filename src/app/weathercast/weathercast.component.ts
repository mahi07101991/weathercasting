import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl,  FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { Forecast} from '../forcast';
@Component({
  selector: 'app-weathercast',
  templateUrl: './weathercast.component.html',
  styleUrls: ['./weathercast.component.css']
})
export class WeathercastComponent implements OnInit {

  weathers: Forecast[] = [];
 
  weatherForm = new FormGroup ({
    city: new FormControl('', [Validators.required]),
  });

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }
  getWeatherFor5Days() {
    console.log(this.weatherForm.value.city);
    this.weathers = [];

    this.weatherService.getWeatherFor5Days(this.weatherForm.value.city).subscribe(
    (data) => {
      for (let i =0 ;i<data['list'].length; i=i+8){
        this.weathers.push(new Forecast(
          data['list'][i].dt_txt,
          data['list'][i].main.temp_max,
          data['list'][i].main.temp_min,
          data['list'][i].main.pressure,
          data['list'][i].main.humidity
        ));
      }
    },

     (error) => {
       console.log(error);
     }
   );
  }
}
