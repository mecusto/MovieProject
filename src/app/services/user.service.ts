import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
import { UserInterface } from 'src/app/userInterface';
import { FilmInterface } from 'src/app/filmInterface';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: UserInterface[];
  film: FilmInterface;
  readonly URL_API = 'http://localhost:5000/users';
  readonly URL_API_USER = 'http://localhost:5000/user';


  constructor(private http: HttpClient) {
    console.log('servicio user creado');
  }

  getUsers(): Observable<any> {
    console.log('estoy en getUsers');
    return this.http.get(this.URL_API, httpOptions).pipe(map(res => res));
  }

  // tslint:disable-next-line: variable-name
  getUserById(_id: string): Observable<any> {
    console.log('estoy en getuserbyid');
    return this.http.get(`${this.URL_API_USER}/${_id}`, httpOptions);
  }

​
  // tslint:disable-next-line: variable-name
  postFilm(film: FilmInterface, _id: string): Observable<any> {
    return this.http.post(`${this.URL_API_USER}/update/${_id}`, film, httpOptions);
  }


  // No reconoce el id??
  // putFilm(user: UserInterface) {
  //   return this.http.put(`${this.URL_API}/${user._id}`, user);
  // }
​
  // deleteFilm(_id: string) {
  //   return this.http.delete(`${this.URL_API}/delete/${_id}`);
  // }
}
