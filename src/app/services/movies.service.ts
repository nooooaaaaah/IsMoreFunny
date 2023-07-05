import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie } from 'src/app/models/movieModel';

const randomNumber = Math.floor(Math.random() * 11);


@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  private apiURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${randomNumber}&sort_by=popularity.desc&with_genres=35';`;
  private imageUrl = "https://image.tmdb.org/t/p/w1280/";

  constructor(private http: HttpClient) { }

  getComedyMovies(): Observable<Movie[]> | null {
    return this.http.get<Movie[]>(this.apiURL).pipe(map(movies => movies.map(movie => (
      {
        title: movie.title,
        poster_path: this.imageUrl + movie.poster_path,
      }
    ))));
  }
}
