import { SearchResultsComponent } from './home/search-results/search-results.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { 

  }
  temp:any
  searchResults:any
  search(term:any){
    this.http.get("http://localhost:9000/searchMovie/"+term).subscribe(resp=>{
      this.temp=resp
      this.searchResults=this.temp
      return this.searchResults
    })
  }
}
