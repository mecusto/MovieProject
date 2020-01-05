import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../userInterface';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title: 'User';
  user: UserInterface;
  // tslint:disable-next-line: variable-name
  _id: string;
  constructor(private userService: UserService,
              private rutaActiva: ActivatedRoute) {}

  ngOnInit() {
    this._id = this.rutaActiva.snapshot.params._id;
    this.userService.getUserById(this._id).subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
  }
}
