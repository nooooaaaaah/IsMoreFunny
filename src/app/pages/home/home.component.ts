import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List } from 'immutable';
import { Movie } from 'src/app/models/movieModel';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';

//!
// todo
//* need to refactor movie services
//* then add movies to movieList and test

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  onclick = () => { console.log("Matt is Dewey") }
  movieList: Movie[] = [{title:'sd', poster_path:''}];
  private movieSubscription!: Subscription;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }
}
