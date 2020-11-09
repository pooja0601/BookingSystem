import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {EventService} from '../../services/event.service';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  
  eventForm: FormGroup;
 
  constructor(public eventService: EventService ) {}

  ngOnInit(): void {

    // this.eventForm = new FormGroup({
    //   eventName: new FormControl('', Validators.required),
    //   date: new FormControl('', Validators.required),
    //   // slotTimes: new FormControl(''),
    //   // noOfAttendesPerSlot: new FormControl('', Validators.required),
    //   noOfCourts: new FormControl('', Validators.required),
    //   slotDuration: new FormControl('', Validators.required),
    //   photo: new FormControl(''),
    //   description: new FormControl(''),
    // });

    this.eventForm = new FormGroup({
      eventName :  new FormControl('', Validators.required),
      eventDate : new FormControl('', Validators.required)
    })
  }

  // onSubmit() {}

  submitEvent() {
    console.log(this.eventForm.value);
    this.eventService.saveEvent(this.eventForm.value)
  }
}
