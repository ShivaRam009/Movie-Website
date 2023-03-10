import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})


export class RegistrationPageComponent {

  constructor(private http:HttpClient){

  }
  registrationForm=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    username:new FormControl(),
    displayName:new FormControl(),
    password:new FormControl(),
    dob:new FormControl(),
    confirmPassword:new FormControl()
  })

  samePass=true;

  registerUser(){

    if(this.registrationForm.value.confirmPassword!=this.registrationForm.value.confirmPassword){
      this.samePass=false;
      return 
    }

    this.http.post("http://localhost:9000/registerUser",this.registrationForm.value).subscribe(resp=>{
      console.log(resp)
    })

  }
  

}
