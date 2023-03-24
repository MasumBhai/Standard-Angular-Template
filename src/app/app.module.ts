import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HomepageComponent} from './components/homepage/homepage.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {FaqPageComponent} from './components/faq-page/faq-page.component';
import {AboutPageComponent} from './components/about-page/about-page.component';
import {AppRoutingModule} from "./app-routing.module";
import {ErrorPageComponent} from './components/error-page/error-page.component';
import {HttpClientModule} from "@angular/common/http";
import {LottieModule} from "ngx-lottie";
import {ApiHandlingService} from "./services/api-handling.service";
import {DarkModeService} from "./services/dark-mode.service";


export function playerFactory(): any {  // for lottie animation
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    FaqPageComponent,
    AboutPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,  // for api data handling in service class or component class
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    LottieModule.forRoot({player: playerFactory}), // for lottie animation
    AppRoutingModule,   /** for app-routing.module.ts **/
  ],
  providers: [ApiHandlingService, DarkModeService], // need to provide service class here
  bootstrap: [AppComponent]
})
export class AppModule {
}
