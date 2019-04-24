import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsUserComponent } from './components/forms-user/forms-user.component';
import { TableUserComponent } from './components/table-user/table-user.component';
import { ListUserComponent } from './containers/list-user/list-user.component';

@NgModule({
  declarations: [
    // Components
    FormsUserComponent,
    TableUserComponent,
    // Containers
    ListUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardUserModule { }
