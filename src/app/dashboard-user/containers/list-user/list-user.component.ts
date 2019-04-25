import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  handleView(id) {
    this.router.navigate(['/users', id]);
  }

}
