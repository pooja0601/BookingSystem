import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
  
})
export class AutoCompleteComponent implements OnInit {

  formattedAddress= '';
  options = {
    componentRestrictions : {
      country: ['AU']
    }
  }
  public handleAddressChange(address: any) {
    this.formattedAddress= address.formatted_address;
}

  constructor() { }

  ngOnInit(): void {

    
  }

 
  

}
