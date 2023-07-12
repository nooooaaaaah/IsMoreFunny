import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie } from 'src/app/models/movieModel';

const randomNumber = Math.floor(Math.random() * 11) + 1;


@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  private apiUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${randomNumber}&sort_by=popularity.desc&with_genres=35;`;
  private apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDk4ODMxYTdlNDg4NmQ5NTIzOGE5ZTY3MWY4MTZlNiIsInN1YiI6IjY0YTMwYTgyZTlkYTY5MDBjNzYzNDk3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AbPcOOLQrLhjnP1Z3fVE_m49zzL3mBdQ3vZrgY0iFGg';
  private imageUrl = "https://image.tmdb.org/t/p/w1280/";

  constructor(private http: HttpClient) { }

  get2ComedyMovies(): Observable<Movie[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiToken}`
    });
    console.log(this.apiUrl)
    return this.http.get<any>(this.apiUrl, { headers }).pipe(
      map(response => response.results),
      map(movies => movies.map((movie: { title: string; poster_path: string; }) => ({
        title: movie.title,
        poster_path: this.imageUrl + movie.poster_path
      }))),
      map(movies => this.getRandomMovies(movies, 2)
    ));
  }

  private getRandomMovies(movies: Movie[], count: number): Movie[] {
    const shuffledMovies = movies.sort(() => 0.5 - Math.random());
    return shuffledMovies.slice(0, count);
  }
}
