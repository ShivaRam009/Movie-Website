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

    ngOnInit(){
      this.movieId=this.route.snapshot.paramMap.get('id')
      console.log(this.route.snapshot.paramMap)
      console.log(this.movieId)
    }
}
