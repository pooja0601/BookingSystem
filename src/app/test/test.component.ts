import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {TestService} from '../../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor( public testService: TestService,
    
    ) { }

  ngOnInit(): void {
  } 
  
  getData(event){
    console.log(event.target.value);
    const value = event.target.value;

    this.testService.saveValue(value);

    
  } 

}
