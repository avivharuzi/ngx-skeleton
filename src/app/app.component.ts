import { Component, OnInit } from '@angular/core';

import { Movie } from './movies/shared/movie.model';
import { MOVIES } from './movies/shared/movie.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  movies: Movie[];

  ngOnInit(): void {
    this.simulate();
  }

  simulate(): void {
    this.movies = [];

    setTimeout(() => this.movies = MOVIES, 4000);
  }

  startLoading(): void {
    this.movies = [];
  }

  stopLoading(): void {
    this.movies = MOVIES;
  }
}
