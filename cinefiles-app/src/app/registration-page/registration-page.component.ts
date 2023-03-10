import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})


export class RegistrationPageComponent {

  constructor(private http:HttpClient,private router:Router){

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

  notEnoughDetails=false;

  temp:any;

  registerUser(){

    if(this.registrationForm.value.password!=this.registrationForm.value.confirmPassword){
      this.samePass=false;
      return 
    }


    this.http.post("http://localhost:9000/registerUser",this.registrationForm.value).subscribe(resp=>{
      this.temp=resp
      if(this.temp.message=="Not enough details provided"){
        this.notEnoughDetails=true
      }
      console.log(resp)
      localStorage.setItem('userToken',this.temp.token)
      if(this.temp.token!=undefined){
        this.router.navigate(['/home']);
      }
    })

  }
  

}
