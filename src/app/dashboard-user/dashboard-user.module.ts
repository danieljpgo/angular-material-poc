import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsUserComponent } from './components/forms-user/forms-user.component';
import { ListUserComponent } from './containers/list-user/list-user.component';

// Material
import { TableUserComponent } from './components/table-user/table-user.component';
import {MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    // Components
    // Material
    TableUserComponent,
    FormsUserComponent,
    // Containers
    ListUserComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ]
})
export class DashboardUserModule { }
