import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home.component';
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {
  constructor(private http:HttpClient,private router:Router,private home:HomeComponent){
  }
  watchlist1:Array<any>=[]
  movies:Array<any>=[]
  ngOnInit(){
    this.watchlist1=this.home.userData.watchlist
    for(let i of this.watchlist1){
     this.http.get("http://localhost:9000/getMovieById/"+i).subscribe(resp=>{
      this.movies.push(resp)
     }) 
    }
  }
}
