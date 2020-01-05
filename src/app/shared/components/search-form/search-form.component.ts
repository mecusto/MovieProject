import { Component, OnInit } from '@angular/core';
import { FilmInterface } from 'src/app/filmInterface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  angForm: FormGroup;
  title: 'Search Form';

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
  }

  onClickSubmit(searchValue) {
    const { type, searchData } = searchValue;
    console.log('onclicksubmit ' + type + searchData);
    this.filmService.searchFilm(type, searchData);
    alert('Searching');
 }

}
