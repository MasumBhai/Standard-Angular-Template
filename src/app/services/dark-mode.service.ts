import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private _isDarkMode = false;

  get isDarkMode() {
    return this._isDarkMode;
  }

  set isDarkMode(value: boolean) {
    this._isDarkMode = value;
    if (value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggle() {
    this.isDarkMode = !this.isDarkMode;
  }


}
