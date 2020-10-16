import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor( private http: HttpClient) { }

  setValue(value){
    const givenValue = value;
    this.http.post("/test/set-value", { value: givenValue }).subscribe(result=>{
      console.log(result);
    })
  }
}
