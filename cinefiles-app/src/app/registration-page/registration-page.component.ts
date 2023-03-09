import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  registrationForm=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    username:new FormControl(),
    displayName:new FormControl(),
    password:new FormControl(),
    dob:new FormControl(),
  })

  

}
