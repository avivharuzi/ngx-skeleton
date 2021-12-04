import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

import { FAKE_MOVIE_LIST } from './movies/shared/fake-movie-list';
import { Movie } from './movies/shared/movie';

@Component({
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
