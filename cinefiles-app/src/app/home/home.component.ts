import { SearchService } from './../search.service';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  token:any
  constructor(public router:Router,private http:HttpClient,private searchservice:SearchService){

  }
  userEmail:any
  temp:any
  userData:any
  searchResults:any

  searchbarForm=new FormGroup({
    searchTerm: new FormControl()
  })

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

  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }

  search(){
    this.router.navigate(['/home/search/'+this.searchbarForm.value.searchTerm])
  }
}
