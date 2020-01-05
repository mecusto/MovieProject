import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../userInterface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  title: 'Users';
  users: UserInterface[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = [];
      data.results.forEach((user: UserInterface) => this.users.push(user));
    });
  }
}
