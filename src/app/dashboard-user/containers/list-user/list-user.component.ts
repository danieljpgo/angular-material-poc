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
  dialogConfig: MatDialogConfig = new MatDialogConfig();

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit() {  }

  handleEdit(user) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.data = {
      title: 'Edit User', userData: user, titleBtn: 'Done'
    };
    const dialogRef = this.dialog.open(FormsUserComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  handleCreate(event) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.data = {
      title: 'Create User', userData: null, titleBtn: 'Create'
    };
    const dialogRef = this.dialog.open(FormsUserComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
