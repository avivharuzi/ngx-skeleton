import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Movie } from '../../shared/movie';

@Component({
  selector: 'ngx-skeleton-demo-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent {
  @Input() movies: Movie[] = [];
}
