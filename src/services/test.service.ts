import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor( private http: HttpClient) { }

  saveValue(value){
    const givenValue = value;
    this.http.post("/api/setValue", { value: givenValue }).subscribe(result=>{
      console.log(result);
    })
  }

  
}
