export class Movie {
  title: string;
  date: string;
  image: string;

  constructor(
    title: string, date: string, image: string,
  ) {
    this.title = title;
    this.date = date;
    this.image = image;
  }
}
