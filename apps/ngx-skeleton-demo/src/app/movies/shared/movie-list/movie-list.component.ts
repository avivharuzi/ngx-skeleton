import { NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Movie } from '../movie';
import { MovieItemComponent } from './movie-item/movie-item.component';

@Component({
  standalone: true,
  imports: [NgIf, NgForOf, MovieItemComponent],
  selector: 'ngx-skeleton-demo-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent {
  @Input() movies: Movie[] = [];
}
