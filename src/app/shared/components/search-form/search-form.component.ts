import { Component, OnInit } from '@angular/core';
import { FilmInterface } from 'src/app/filmInterface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FilmService } from 'src/app/services/film.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  angForm: FormGroup;
  title: 'Search Form';
  films: FilmInterface[];
  searchFinish: boolean;

  constructor(private fb: FormBuilder,
              private filmService: FilmService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      type: [''],
      searchData: ['']
    });
  }

  ngOnInit() {
    this.searchFinish = false;
  }

  onClickSubmit(searchValue) {
    const { type, searchData } = searchValue;

    this.filmService.searchFilm(type, searchData).subscribe(res => {
      console.log(res);
      this.films = [];
      res.results.forEach((x: FilmInterface) => this.films.push(x));
      console.log(this.films);
      this.searchFinish = true;
    });
 }

}
