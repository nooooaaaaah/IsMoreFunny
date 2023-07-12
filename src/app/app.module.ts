import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MovieComponent } from './components/movie/movie.component';
import { RatingComponent } from './components/rating/rating.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VotingComponent } from './pages/voting/voting.component';
import { MoviesService } from './services/movies.service';
import { CommonButtonComponent } from './components/common-button/common-button.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    RatingComponent,
    NavbarComponent,
    HomeComponent,
    VotingComponent,
    CommonButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
