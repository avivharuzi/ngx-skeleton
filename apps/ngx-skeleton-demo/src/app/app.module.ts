import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MoviesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
