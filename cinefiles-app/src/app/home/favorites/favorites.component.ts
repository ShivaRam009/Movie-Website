import { HttpClient } from '@angular/common/http';
import { Component,Input } from '@angular/core';
import { HomeComponent } from '../home.component';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  @Input() toggle:boolean | undefined;
  constructor(private home:HomeComponent,private http:HttpClient){

  }
  movies:Array<any>=[];
  async ngOnInit(){
    for(let i of this.home.userData.movies_liked){
      // this.http.get("http://localhost:9000/getMovieById/" + i).subscribe(async (resp) => {
      //   this.movies.push(resp);
      // })
      const movie = await this.http.get("http://localhost:9000/getMovieById/" + i).toPromise()
      this.movies.push(movie)
    }
  }

  // ngOnChanges(){
  //   this.movies=[]
  //   for(let i of this.home.userData.movies_liked){
  //     this.http.get("http://localhost:9000/getMovieById/"+i).subscribe((resp)=>{
  //       this.movies.push(resp)
  //     })
  //   }
  // }



}
