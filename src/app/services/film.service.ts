import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
import { FilmInterface } from 'src/app/filmInterface';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films: FilmInterface[];
  readonly URL_API = 'http://localhost:5000';


  constructor(private http: HttpClient) {
    console.log('servicio film creado');
  }

  getFilms(): Observable<any> {
    console.log('estoy en getFilms');
    return this.http.get(this.URL_API, httpOptions).pipe(map(res => res));
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
