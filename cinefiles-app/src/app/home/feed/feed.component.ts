import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  constructor(private http:HttpClient,private router:Router){

  }
  popularMovies:Array<any>=[]
  temp:any
  ngOnInit(){
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
    })

   
  }

}
