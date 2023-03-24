import {Component} from '@angular/core';
import {DarkModeService} from "../../services/dark-mode.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public darkModeService: DarkModeService) {
  }
}
