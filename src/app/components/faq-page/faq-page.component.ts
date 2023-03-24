import {Component} from '@angular/core';
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent {

  options_lottie_faq: AnimationOptions = {
    path: '/assets/lottie/lottie-faq.json'
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
