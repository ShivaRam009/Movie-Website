import { MovieComponent } from './home/movie/movie.component';
import { SearchResultsComponent } from './home/search-results/search-results.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { WatchlistComponent } from './home/watchlist/watchlist.component';
import { FeedComponent } from './home/feed/feed.component';
import { FavoritesComponent } from './home/favorites/favorites.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home',
    children:[
      {
        component:WatchlistComponent,
        path:'watchlist'
      },
      {
        component:SearchResultsComponent,
        path:'search'
      },
      {
        component:FeedComponent,
        path:'feed'
      },
      {
        component:FavoritesComponent,
        path:'favorites'
      },
      {
        component:MovieComponent,
        path:'movie/:id'
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
