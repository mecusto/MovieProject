import { Injectable } from '@angular/core';

import { FilmInterface } from 'src/app/filmInterface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films: FilmInterface[];
  readonly URL_API = 'http://localhost:3000/films';


  constructor(private http: HttpClient) {
    console.log('servicio film creado');
  }

  getFilms() {
    return this.http.get(this.URL_API);
  }
  getFilmById(_id: string) {
    return this.http.get(`${this.URL_API}/${_id}`);
  }
​
  postFilm(film: FilmInterface) {
    return this.http.post(this.URL_API + '/addfilm', film);
  }

  putFilm(film: FilmInterface) {
    return this.http.put(`${this.URL_API}/${film._id}`, film);
  }
​
  deleteFilm(_id: string) {
    return this.http.delete(`${this.URL_API}/delete/${_id}`);
  }
}
