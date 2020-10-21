import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { MatInputModule } from '@angular/material/input';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    AutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    MatInputModule,
    GooglePlaceModule   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//https://www.npmjs.com/package/@angular-material-extensions/google-maps-autocomplete
//commit check