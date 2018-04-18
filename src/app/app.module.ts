import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeathercastComponent } from './weathercast/weathercast.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WeatherService } from './weather.service';
import { HttpModule } from '@angular/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { WeatherDirective } from './weather.directive';

@NgModule({
  declarations: [
    AppComponent,
    WeathercastComponent,
    SpinnerComponent,
    WeatherDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    HttpModule


  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
