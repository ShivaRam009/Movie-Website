import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
    constructor(private http:HttpClient,private route:ActivatedRoute,public router:Router){

    }
    movieId:any=""
    movieData:any
    type:string=""

    ngOnInit(){
      this.movieId=this.route.snapshot.paramMap.get('id')
      this.http.get("http://localhost:9000/getMovieById/"+this.movieId).subscribe(resp=>{
        this.movieData=resp
        this.type=this.movieData.type
      })
    }

    name='ngx-sharebuttons'
}
