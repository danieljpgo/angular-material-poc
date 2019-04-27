import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectTheme: boolean;

  handleSelectTheme(event) {
    this.selectTheme = event;
  }
}
