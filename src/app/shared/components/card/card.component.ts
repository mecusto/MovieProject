import { Component, OnInit, Input } from '@angular/core';
import { FilmInterface } from '../../../filmInterface';
import { UserInterface } from 'src/app/userInterface';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  film: FilmInterface;
  user: UserInterface;
  _id: string;

  constructor(private userService: UserService,
              private rutaActiva: ActivatedRoute) {
    console.log('constructor' + this.film); }

  ngOnInit() {
    console.log(this.film + 'del card component');
  }
  onClickSubmit() {
    this._id = this.rutaActiva.snapshot.params._id;
    console.log('onclicksubmit invocado');
    this.userService.postFilm(this.film, this._id).subscribe(res => {});
  }

}
