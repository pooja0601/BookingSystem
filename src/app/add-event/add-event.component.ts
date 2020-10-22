import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  eventForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      eventName: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      // slotTimes: new FormControl(''),
      // noOfAttendesPerSlot: new FormControl('', Validators.required),
      noOfCourts: new FormControl('', Validators.required),
      slotDuration: new FormControl('', Validators.required),
      photo: new FormControl(''),
      description: new FormControl(''),
    });
  }

  onSubmit() {}
}
