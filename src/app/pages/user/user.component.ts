import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../userInterface';
import { UserService } from '../../services/user.service';
import { FilmService } from 'src/app/services/film.service';
import { FilmInterface } from 'src/app/filmInterface';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title: 'User';
  public user: UserInterface;
  userOk: boolean;
  // tslint:disable-next-line: variable-name
  _id: string;
  userFilms: FilmInterface[];
  constructor(private userService: UserService,
              private rutaActiva: ActivatedRoute) {}
// Se cargan de inicio los datos del usuario por el id que se pasa por parmas
  ngOnInit() {
    this._id = this.rutaActiva.snapshot.params._id;
    this.userService.getUserById(this._id).subscribe(data => {
      this.user = data.results;
      console.log(this.user);
      this.userOk = true;
    });
  }
  getFilms(){
    //TODO buscar en la base de datos films las películas de la filmeteca de usuario
  }
}
