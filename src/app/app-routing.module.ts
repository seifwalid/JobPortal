import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { JobLoginComponent } from './components/job-login/job-login.component';
import { JobSignupComponent } from './components/job-signup/job-signup.component';
const routes: Routes = [
  {path:'',component:WelcomePageComponent},
  {path:'login',component:JobLoginComponent},
  {path:'register',component:JobSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
