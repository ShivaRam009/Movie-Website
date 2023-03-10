import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  constructor(private router:Router){}
  registrationForm=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    userName:new FormControl(),
    displayName:new FormControl(),
    password:new FormControl(),
    confirmPassword:new FormControl(),
    dob:new FormControl()
  })
}
