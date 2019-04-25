import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './navigation/containers/not-found/not-found.component';
import { DashboardUserModule } from './dashboard-user/dashboard-user.module';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './navigation/containers/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardUserModule,
    // Material
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
