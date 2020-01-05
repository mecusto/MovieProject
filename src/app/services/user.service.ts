import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
import { UserInterface } from 'src/app/userInterface';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: UserInterface[];
  readonly URL_API = 'http://localhost:5000/users';


  constructor(private http: HttpClient) {
    console.log('servicio user creado');
  }

  getUsers(): Observable<any> {
    console.log('estoy en getUsers');
    return this.http.get(this.URL_API, httpOptions).pipe(map(res => res));
  }
  getFilmById(_id: string) {
    return this.http.get(`${this.URL_API}/${_id}`);
  }
​
  postFilm(user: UserService) {
    return this.http.post(this.URL_API + '/addfilm', user);
  }


  //No reconoce el id??
  // putFilm(user: UserService) {
  //   return this.http.put(`${this.URL_API}/${user._id}`, user);
  // }
​
  deleteFilm(_id: string) {
    return this.http.delete(`${this.URL_API}/delete/${_id}`);
  }
}
