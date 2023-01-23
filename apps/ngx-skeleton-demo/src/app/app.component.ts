import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, timer } from 'rxjs';

import { FAKE_MOVIE_LIST } from './movies/shared/fake-movie-list';
import { Movie } from './movies/shared/movie';
import { MovieListComponent } from './movies/shared/movie-list/movie-list.component';

@Component({
  standalone: true,
  imports: [AsyncPipe, MovieListComponent],
  selector: 'ngx-skeleton-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  moviesSubject = new BehaviorSubject<Movie[]>([]);

  movies$: Observable<Movie[]> = this.moviesSubject.asObservable();

  ngOnInit(): void {
    this.simulate();
  }

  simulate(): void {
    this.startLoading();
    timer(4000).subscribe(() => {
      this.stopLoading();
    });
  }

  startLoading(): void {
    this.moviesSubject.next([]);
  }

  stopLoading(): void {
    this.moviesSubject.next([...FAKE_MOVIE_LIST]);
  }
}
