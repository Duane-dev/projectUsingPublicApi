import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  filter : string = "popular"; 
  isVisible = false;
  searchForm!: FormGroup;

  baseUrl = "https://image.tmdb.org/t/p/original/"
  constructor(private fb: FormBuilder,private api : ApiService) { }
  movies: any[] = [
  ];
  genres: any[] = [
  ];
  ngOnInit(): void {
    
    this.getAllMovies()
    this.getAllGenres()
    this.searchForm = this.fb.group({
      search: [''],
    });
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
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
      console.log(this.movies)
    })
  }
  searchAllMovies(){
    this.api.searchMovies(this.searchForm.value.search)
    .subscribe(res=>{
      this.movies = res.results
      // console.log(res)
    })
    this.searchForm.reset()
  }
  getAllGenres(){
    this.api.getGenres()
    .subscribe(res=>{
      this.genres = res.genres
      console.log(this.genres)
    })
  }
}
