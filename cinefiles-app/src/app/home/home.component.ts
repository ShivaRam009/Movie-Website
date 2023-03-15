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
  popularMovies:Array<any>=[]


  
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

    this.http.get("http://localhost:9000/getMovieById/640363d4cf69eef03a794892").subscribe(resp=>{
      this.popularMovies.push(resp);
    })

    this.http.get("http://localhost:9000/getMovieById/640363d4cf69eef03a794892").subscribe(resp=>{
      this.popularMovies.push(resp);
    })


    this.http.get("http://localhost:9000/getMovieById/64047202b305f319df7b1c87").subscribe(resp=>{
      this.popularMovies.push(resp);
    })

    this.http.get("http://localhost:9000/getMovieById/640363d4cf69eef03a794892").subscribe(resp=>{
      this.popularMovies.push(resp);
    })

    this.http.get("http://localhost:9000/getMovieById/640475a2ca0ff1f87c2bd76e").subscribe(resp=>{
      this.popularMovies.push(resp);
    })

    this.http.get("http://localhost:9000/getMovieById/640363d4cf69eef03a794892").subscribe(resp=>{
      this.popularMovies.push(resp);
    })

    this.http.get("http://localhost:9000/getMovieById/640363d4cf69eef03a794892").subscribe(resp=>{
      this.popularMovies.push(resp);
    })




  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
