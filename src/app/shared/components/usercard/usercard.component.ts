import { Component, OnInit, Input } from '@angular/core';
import { FilmInterface } from '../../../filmInterface';
import { UserInterface } from 'src/app/userInterface';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit {

  @Input()
  user: UserInterface;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
