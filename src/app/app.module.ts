import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeathercastComponent } from './weathercast/weathercast.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WeatherService } from './weather.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    WeathercastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule


  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
