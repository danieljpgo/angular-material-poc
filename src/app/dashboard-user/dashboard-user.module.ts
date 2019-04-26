import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Components
import { FormsUserComponent } from './components/forms-user/forms-user.component';
import { TableUserComponent } from './components/table-user/table-user.component';

// Containers
import { ListUserComponent } from './containers/list-user/list-user.component';
import { ViewerUserComponent } from './containers/viewer-user/viewer-user.component';

// Service
import { DashboardUserService } from './dashboard-user.service';

// Material
import { MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatButtonModule,
         MatProgressSpinnerModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    // Components
    TableUserComponent,
    FormsUserComponent,
    // Containers
    ListUserComponent,
    ViewerUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    // Material
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule
  ],
  providers: [
    DashboardUserService
  ]
})
export class DashboardUserModule { }
