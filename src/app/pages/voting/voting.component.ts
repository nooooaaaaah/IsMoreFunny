import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movieModel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  movie1: Movie = { title: '', poster_path: '' };
  movie2: Movie = { title: '', poster_path: '' };
  chosenMovie: Movie | undefined;
  chosenMovie1Count: number = 0;
  chosenMovie2Count: number = 0;
  private movieSubscription!: Subscription;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movieSubscription = this.moviesService.get2ComedyMovies().subscribe({
      next: movies => {
        this.movie1 = movies[0];
        this.movie2 = movies[1];
      },
      error: error => {
        console.error(error);
      },
      complete: () => {
      }
    });
  }
  changeMovie2() {
    this.chosenMovie1Count++;
    this.chosenMovie = this.movie1
    this.movieSubscription.unsubscribe(); // Unsubscribe from previous subscription

    this.movieSubscription = this.moviesService.get2ComedyMovies().subscribe({
      next: (movies: Movie[]) => {
        this.movie2 = movies[0]; // Change movie2 to a new movie
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        this.chosenMovie2Count = 0;
      }
    });
  }
  changeMovie1() {
    this.chosenMovie2Count++;
    this.chosenMovie = this.movie2
    this.movieSubscription.unsubscribe(); // Unsubscribe from previous subscription

    this.movieSubscription = this.moviesService.get2ComedyMovies().subscribe({
      next: (movies: Movie[]) => {
        this.movie1 = movies[0]; // Change movie2 to a new movie
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        this.chosenMovie1Count = 0;
      }
    });
  }

  ngOnDestroy() {
    if (this.movieSubscription) {
      this.movieSubscription.unsubscribe();
    }
  }
}
