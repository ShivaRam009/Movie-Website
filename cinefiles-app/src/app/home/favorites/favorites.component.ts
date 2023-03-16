import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HomeComponent } from '../home.component';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  constructor(private home:HomeComponent,private http:HttpClient){

  }
  movies:Array<any>=[];
  ngOnInit(){
    for(let i of this.home.userData.movies_liked){
      this.http.get("http://localhost:9000/getMovieById/"+i).subscribe((resp)=>{
        this.movies.push(resp)
      })
    }
  }

}
