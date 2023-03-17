import { SearchResultsComponent } from './home/search-results/search-results.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { WatchlistComponent } from './home/watchlist/watchlist.component';
import { FeedComponent } from './home/feed/feed.component';
import { FavoritesComponent } from './home/favorites/favorites.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    LandingComponent,
    RegistrationPageComponent,
    WatchlistComponent,
    SearchResultsComponent,
    FeedComponent,
    FavoritesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
