import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { FilmInterface } from 'src/app/filmInterface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: 'Films';
  films: FilmInterface[];


  constructor(private filmService: FilmService) {

   }

  ngOnInit() {
    this.filmService.getFilms().subscribe(data => {
      this.films = [];
      data.results.forEach((x: FilmInterface) => this.films.push(x));
    });
  }

}
