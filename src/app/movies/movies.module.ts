import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSkeletonModule } from 'ngx-skeleton';

import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-list/movie-item/movie-item.component';

@NgModule({
  declarations: [MovieListComponent, MovieItemComponent],
  imports: [CommonModule, NgxSkeletonModule],
  exports: [MovieListComponent],
})
export class MoviesModule {
}
