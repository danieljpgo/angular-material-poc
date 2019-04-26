import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardUserService } from '../../dashboard-user.service';

import { User } from '../../models/user.interface';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users: User[] = [];

  constructor(private router: Router, private usersService: DashboardUserService) { }

  ngOnInit() {
    // this.handleGetUsers();
  }

  handleView(id) {
    this.router.navigate(['/users', id]);
  }

  // handleGetUsers() {
  //   // this.usersService.getUsers().subscribe((data: User[]) => {
  //   //   console.log(data);
  //   //   return this.users = data;
  //   // });
  // }

}
