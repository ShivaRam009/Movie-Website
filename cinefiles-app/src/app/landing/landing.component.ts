import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {


  constructor(private http:HttpClient,private router:Router){

  }
  
  temp:any
  loginForm=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  }
  )
  wrongPassword=false

  loginUser(){
    this.http.post("http://localhost:9000/loginUser",this.loginForm.value).subscribe((data=>{
      this.temp=data
      if(this.temp.message!="User Logged In"){
        this.wrongPassword=true
      }
      localStorage.setItem('userToken',this.temp.token)
      if(this.temp.token!=undefined){
        this.router.navigate(['/home']);
        
      }
    }))
  }

}
