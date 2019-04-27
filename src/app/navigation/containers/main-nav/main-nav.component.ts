import {Component, EventEmitter, Output} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Nav } from '../../models/nav.interface';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  @Output() selectTheme: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private breakpointObserver: BreakpointObserver) {}

  nav: Nav[] = [
    {
      link: '/dashboard',
      name: 'Dashboard',
      exact: true
    },
    {
      link: '/users',
      name: 'Users',
      exact: true
    }
  ];

  handleTheme(event) {
    this.selectTheme.emit(event.checked);
  }

}
