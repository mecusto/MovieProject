export interface FilmInterface  {
    _id: string;
    title: string;
    year: number;
    rated: string;
    runtime: number;
    countries: string[];
    genres: string[];
    director: string;
    writers: string[];
    actors: string[];
    plot: string;
    poster: any;
    imdb: object;
    tomato: object;
    reviews: object;
    userMeter: number;
    userRating: number;
    userReviews: number;
    metacritic: number;
    awards: Awards;
    type: string;
  }

export interface Awards {
    win: number;
    nominations: number;
    text: string;
  }
