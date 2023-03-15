import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HomeComponent } from '../home.component';
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {
  constructor(private home:HomeComponent,private http:HttpClient){   
  }
  movies:Array<any>=[];
  ngOnInit(){
    for(let i of this.home.userData.watchlist){
      this.http.get("http://localhost:9000/getMovieById/"+i).subscribe((resp)=>{
        this.movies.push(resp)
      })
    }
  }
}

