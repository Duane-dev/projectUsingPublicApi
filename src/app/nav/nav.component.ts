import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  filter : string = "popular"; 

  baseUrl = "https://image.tmdb.org/t/p/original/"
  constructor(private api : ApiService) { }
  movies: any[] = [
  ];
  ngOnInit(): void {
    
    this.getAllMovies()
  }
  getAllTrending(){
    this.api.getTrendingMovies()
    .subscribe(res=>{
      for (let index = 0; index < res.results.length; index++) {
        console.log(res.results[index].title)
        
      }
    })
  }
  fetchDataAgain(text : string){
      this.filter = text;
      this.getAllMovies()
  }
  getAllMovies(){
    this.api.getMovies(this.filter)
    .subscribe(res=>{
      this.movies = res.results
    })
  }
}
