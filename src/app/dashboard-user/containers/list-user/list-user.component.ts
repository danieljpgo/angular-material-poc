import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { FormsUserComponent } from '../../components/forms-user/forms-user.component';
import { DashboardUserService } from '../../dashboard-user.service';

// Interface
import {User} from '../../models/user.interface';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  dialogConfig: MatDialogConfig = new MatDialogConfig();

  constructor(private router: Router, private dialog: MatDialog, private userService: DashboardUserService) { }

  ngOnInit() {  }

  handleEdit(user) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.data = {
      title: 'Edit User', userData: user, titleBtn: 'Done'
    };
    console.log(user)
    const dialogRef = this.dialog.open(FormsUserComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe((result: User) => {
      if (result) {
        this.userService.updateUser(result).subscribe((data) => {
          console.log(data);
        }, (error) => {
          console.log(error);
        });
      }
    });
  }

  handleCreate(event) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.data = {
      title: 'Create User', userData: null, titleBtn: 'Create'
    };
    const dialogRef = this.dialog.open(FormsUserComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe((result: User) => {
      if (result) {
        this.userService.createUser(result).subscribe((data) => {
          console.log(data);
        }, (error) => {
          console.log(error);
        });
      }
    });
  }
}
