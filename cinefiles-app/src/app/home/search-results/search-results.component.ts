import { HomeComponent } from './../home.component';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent{
  constructor(private http:HttpClient, private home:HomeComponent){

  }

  searchTerm:any

  ngOnInit(){
    this.searchTerm=this.home.searchbarForm.value.searchTerm
  
  }




}
