import {Component} from '@angular/core';
import {AnimationItem} from "ngx-lottie/lib/symbols";
import {AnimationOptions} from "ngx-lottie";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {

  options_lottie_programmer: AnimationOptions = {
    path: '/assets/lottie/lottie-programmer.json'
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
