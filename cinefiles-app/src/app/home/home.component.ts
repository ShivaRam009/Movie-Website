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
  constructor(public router:Router,private http:HttpClient){

  }
  userEmail:any
  temp:any
  userData:any
  popularMovies:Array<any>=[]
  
  async ngOnInit(){
    console.log(this.router.url)
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
      this.http.get("http://localhost:9000/getMovieById/6403658d15efb62d86c9d3df").subscribe(response=>{
      this.temp=response 
      this.popularMovies.push(this.temp)
    })
    this.http.get("http://localhost:9000/getMovieById/64047202b305f319df7b1c87").subscribe(response=>{
      this.temp=response 
      this.popularMovies.push(this.temp)
    })
    this.http.get("http://localhost:9000/getMovieById/6404780eca0ff1f87c2bd783").subscribe(response=>{
      this.temp=response 
      this.popularMovies.push(this.temp)
    })
    this.http.get("http://localhost:9000/getMovieById/64047919ca0ff1f87c2bd794").subscribe(response=>{
      this.temp=response 
      this.popularMovies.push(this.temp)
      console.log(this.popularMovies)
    })
      

      
    })

  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }


}
