import { HomeComponent } from './../home.component';
import { HttpClient } from '@angular/common/http';
import { Component,OnChanges, SimpleChanges,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnChanges {
  @Input() toggle:boolean | undefined;
  constructor(private http:HttpClient, private home:HomeComponent,private route:ActivatedRoute){

  }
  term:any
  temp:any
  searchResults:any
  noResults=false
  ngOnChanges(changes: SimpleChanges): void {
    this.term=this.home.searchbarForm.value.searchTerm
    console.log(this.term.length)
    if(this.term==""){
      this.noResults=true
    }
    else{
      this.noResults=false
      this.http.get("http://localhost:9000/searchMovie/"+this.term).subscribe((response)=>{
      console.log(response)
      this.temp=response
      this.searchResults=this.temp
    
    })
    }
    
  }

  

  ngOnInit(){
    if(this.term==""){
      this.noResults=true
    }
  }




}
