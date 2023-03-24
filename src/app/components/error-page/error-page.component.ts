import {Component} from '@angular/core';
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {

  options_lottie_error: AnimationOptions = {
    path: '/assets/lottie/lottie-404-error.json'
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
