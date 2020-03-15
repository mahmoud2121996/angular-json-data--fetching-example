import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../get-users.service';
@Component({
  selector: 'app-app-users',
  templateUrl: './app-users.component.html',
  styleUrls: ['./app-users.component.css']
})
export class AppUsersComponent implements OnInit {
  public users = [];
  public errorMsg;
  constructor(private userService: GetUsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.users = data, error => this.errorMsg = error);
  }

}
