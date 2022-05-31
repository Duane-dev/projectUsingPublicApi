import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    baseUrl : string = "https://api.themoviedb.org/3/"
    apiKey : string = "c41045fbc351f10d1b796d7558539856"
  constructor(private http: HttpClient) { }

//   postUser(data : any){
//     return this.http.post<any>("https://heroku-json-server-hosting.herokuapp.com/Users", data)
//     .pipe(map((res:any)=>{
//       return res;
//     }))
//   }
//   postVote(data : any){
//     return this.http.post<any>("https://heroku-json-server-hosting.herokuapp.com/Votes", data)
//     .pipe(map((res:any)=>{
//       return res;
//     }))
//   }
// updateUser(data :any,id: number){
//     return this.http.put<any>("https://heroku-json-server-hosting.herokuapp.com/Users/"+id,data)
//     .pipe(map((res:any)=>{
//       return res;
//     }))
//   }
  getTrendingMovies(){
    return this.http.get<any>(this.baseUrl+"trending/all/day?api_key="+this.apiKey+"&page=1")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getMovies(data:any){
    return this.http.get<any>(this.baseUrl+"movie/"+data+"?api_key="+this.apiKey+"&page=1")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getGenres(){
    return this.http.get<any>(this.baseUrl+"genre/movie/list?api_key="+this.apiKey+"&language=en-US")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
    searchMovies(data:any){
      return this.http.get<any>(this.baseUrl+"search/movie?api_key="+this.apiKey+"&language=en-US&page=1&include_adult=false&query="+data)
      .pipe(map((res:any)=>{
        return res;
      }))
  

  }
}
 


 