import { Component, OnInit, Input } from '@angular/core';
import {UserInterface} from '../../../userInterface';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit {

  @Input()
  user: UserInterface;

  constructor() { }

  ngOnInit() {
  }

}
