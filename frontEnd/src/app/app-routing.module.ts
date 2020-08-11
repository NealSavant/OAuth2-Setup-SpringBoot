import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes, {useHash: false})]
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
