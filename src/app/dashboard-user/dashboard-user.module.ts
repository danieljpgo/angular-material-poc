import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { FormsUserComponent } from './components/forms-user/forms-user.component';
import { TableUserComponent } from './components/table-user/table-user.component';
import { ModalComponent } from './components/modal/modal.component';

// Containers
import { ListUserComponent } from './containers/list-user/list-user.component';

// Service
import { DashboardUserService } from './dashboard-user.service';

// Material
import {
  MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatButtonModule,
  MatProgressSpinnerModule, MatInputModule, MatDialogModule, MatSelectModule, MatCardModule } from '@angular/material';


@NgModule({
  declarations: [
    // Components
    TableUserComponent,
    FormsUserComponent,
    // Containers
    ListUserComponent,
    ModalComponent
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
    MatCardModule
  ],
  providers: [
    DashboardUserService
  ],
  entryComponents: [
    FormsUserComponent,
    ModalComponent
  ]
})
export class DashboardUserModule { }
