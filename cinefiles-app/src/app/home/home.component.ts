import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  token:any
  constructor(private router:Router,private http:HttpClient){

  }
  userEmail:any
  temp:any
  userData:any
  eszds:any
  adasa:any
  
  async ngOnInit(){
    this.token=localStorage.getItem('userToken')
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+localStorage.getItem('userToken')
    });
    const httpOptions = {
      headers: headers_object
    };

    this.http.get("http://localhost:9000/verify",httpOptions).subscribe(resp=>{
      this.temp=resp
      this.userEmail=this.temp.userEmail
      this.http.get("http://localhost:9000/getUserByEmail/"+this.userEmail).subscribe((resp)=>{
        this.temp=resp 
        this.userData=this.temp
      })

      
    })

  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
