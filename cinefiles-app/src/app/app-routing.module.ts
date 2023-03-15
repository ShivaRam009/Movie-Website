import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { WatchlistComponent } from './home/watchlist/watchlist.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home',
    children:[
      {
        component:WatchlistComponent,
        path:'watchlist'
      }
    ]
  },
  {
    component:LandingComponent,
    path:''
  },
  {
    component:RegistrationPageComponent,
    path:'registration'
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
