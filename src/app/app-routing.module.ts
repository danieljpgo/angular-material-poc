import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUserComponent } from './dashboard-user/containers/list-user/list-user.component';
import {NotFoundComponent} from './navigation/containers/not-found/not-found.component';

const routes: Routes = [
  { path: 'users', children: [{ path: '', component: ListUserComponent }]},
  { path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
