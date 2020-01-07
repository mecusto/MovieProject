import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../userInterface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: UserInterface;
  id: string;
  constructor() { }

  ngOnInit() {
  }

}
