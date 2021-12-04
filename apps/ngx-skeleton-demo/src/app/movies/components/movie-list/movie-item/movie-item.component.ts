import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Movie } from '../../../shared/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieItemComponent {
  @Input() movie: Movie | null = null;
  @Input() isLoading = false;
}
