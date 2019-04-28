import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { FormsUserComponent } from './components/forms-user/forms-user.component';
import { TableUserComponent } from './components/table-user/table-user.component';

// Containers
import { ListUserComponent } from './containers/list-user/list-user.component';

// Service
import { DashboardUserService } from './dashboard-user.service';

// Material
import {
  MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatButtonModule,
  MatProgressSpinnerModule, MatInputModule, MatDialogModule, MatSelectModule } from '@angular/material';


@NgModule({
  declarations: [
    // Components
    TableUserComponent,
    FormsUserComponent,
    // Containers
    ListUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Material
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
  ],
  providers: [
    DashboardUserService
  ],
  entryComponents: [
    FormsUserComponent
  ]
})
export class DashboardUserModule { }
