import {Component, OnInit} from '@angular/core';
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "ngx-lottie/lib/symbols";
import {Observable} from "rxjs";
import {ApiHandlingService} from "../../services/api-handling.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  // variable for specifying file path of lottie json
  options_lottie_eye: AnimationOptions = {
    path: '/assets/lottie/lottie-eyes.json'
  };
  // variable for specifying file path of lottie json
  options_lottie_thinking: AnimationOptions = {
    path: '/assets/lottie/lottie-thinking.json'
  };

  // This is the component function that binds to the animationCreated event from the package
  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor(private apiService: ApiHandlingService) {
  }

  quotes$: Observable<any>;
  fact1$: Observable<any>;
  fact2$: Observable<any>;

  changeQuote() {
    this.quotes$ = this.apiService.getQuotes();
  }

  changeFactItems() {
    this.fact1$ = this.apiService.getFacts();
    this.fact2$ = this.apiService.getFacts();
  }

  ngOnInit(): void {
    this.quotes$ = this.apiService.getQuotes();
    this.fact1$ = this.apiService.getFacts();
    this.fact2$ = this.apiService.getFacts();
  }


}
