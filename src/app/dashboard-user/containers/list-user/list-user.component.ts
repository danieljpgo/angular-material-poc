import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { FormsUserComponent } from '../../components/forms-user/forms-user.component';
import { DashboardUserService } from '../../dashboard-user.service';
import {ModalComponent} from '../../components/modal/modal.component';

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

  handleEdit(user: User) {
    console.log(user);
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.data = {
      title: 'Edit User', userData: user, titleBtn: 'Done'
    };
    const dialogRefEdit = this.dialog.open(FormsUserComponent, this.dialogConfig);
    dialogRefEdit.afterClosed().subscribe((result: User) => {
      if (result) {
        this.userService.updateUser(result).subscribe((data) => {
          console.log(data);
        }, (error) => {
          console.log(error);
        });
      }
    });
  }

  handleCreate() {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.data = {
      title: 'Create User', userData: null, titleBtn: 'Create'
    };
    const dialogRefCreate = this.dialog.open(FormsUserComponent, this.dialogConfig);
    dialogRefCreate.afterClosed().subscribe((result: User) => {
      if (result) {
        this.userService.createUser(result).subscribe((data) => {
          console.log(data);
        }, (error) => {
          console.log(error);
        });
      }
    });
  }

  handleDeleteUser(user: User) {
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.data = {
      title: 'Delet User', content: 'Do you really want to delete this user?'
    };
    const dialogRefDelet = this.dialog.open(ModalComponent, this.dialogConfig);
    dialogRefDelet.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.userService.deleteUser(user).subscribe();
      }
    });
  }
}
