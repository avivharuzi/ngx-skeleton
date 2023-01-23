import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NgxSkeletonComponent } from 'ngx-skeleton';

import { Movie } from '../../movie';

@Component({
  standalone: true,
  imports: [NgIf, NgxSkeletonComponent],
  selector: 'ngx-skeleton-demo-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieItemComponent {
  @Input() movie: Movie | null = null;

  @Input() isLoading = false;
}
