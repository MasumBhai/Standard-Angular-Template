import {Component} from '@angular/core';
import {DarkModeService} from "./services/dark-mode.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'standard-template';

  constructor(public darkModeService: DarkModeService) {
  }
}
