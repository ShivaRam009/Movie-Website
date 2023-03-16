import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  constructor(private home:HomeComponent,private http:HttpClient){

  }

  popularMovies:Array<any>=[];
  ngOnInit(){
    this.http.get("http://localhost:9000/getMovieById/640363d4cf69eef03a794892").subscribe(resp=>{
      this.popularMovies.push(resp);
    })

    this.http.get("http://localhost:9000/getMovieById/640363d4cf69eef03a794892").subscribe(resp=>{
      this.popularMovies.push(resp);
    })


    this.http.get("http://localhost:9000/getMovieById/64047202b305f319df7b1c87").subscribe(resp=>{
      this.popularMovies.push(resp);
    })

    this.http.get("http://localhost:9000/getMovieById/6403658d15efb62d86c9d3df").subscribe(resp=>{
      this.popularMovies.push(resp);
    })
  }
}


/*  constructor(private home:HomeComponent,private http:HttpClient){   
  }*/