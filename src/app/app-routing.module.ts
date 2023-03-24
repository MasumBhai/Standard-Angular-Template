import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {FaqPageComponent} from "./components/faq-page/faq-page.component";
import {AboutPageComponent} from "./components/about-page/about-page.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomepageComponent,
    children: []
  },
  {
    path: 'about',
    pathMatch: "full",
    component: AboutPageComponent
  },
  {
    path: 'faq',
    pathMatch: "full",
    component: FaqPageComponent
  },
  {
    path: '**', // wildcard routing
    component: ErrorPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)], // to instantiate as singleton
  exports: [RouterModule] // To outsource this module to all other modules
})
export class AppRoutingModule {
}
