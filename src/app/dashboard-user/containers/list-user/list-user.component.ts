import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { FormsUserComponent } from '../../components/forms-user/forms-user.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit() {  }

  handleEdit(id) {
    console.log(id);
    this.dialog.open(FormsUserComponent);
  }

  handleCreate(event) {
    console.log(event);
    this.dialog.open(FormsUserComponent);
  }
}
