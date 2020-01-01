import { Component, OnInit, Input } from '@angular/core';
import { FilmInterface } from '../../../filmInterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  film: FilmInterface;

  constructor() {console.log('constructor' + this.film); }

  ngOnInit() {
    console.log('llamada onIngInit');
    console.log(this.film);
  }

}
