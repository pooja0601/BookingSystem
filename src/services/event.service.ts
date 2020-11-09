import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  saveEvent(value) {
    console.log("yo");
    this.http.post("/api/eventData",{value: value}).subscribe(resp => {
      console.log(resp);
    })
  }
}
