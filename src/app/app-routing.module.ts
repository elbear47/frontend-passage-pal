import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupPageComponent},



  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
