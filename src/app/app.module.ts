import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {MovieLandingPageComponent} from './components/movie-landing-page/movie-landing-page.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {MovieCardComponent} from './components/movie-landing-page/movie-card/movie-card.component';
import {FooterComponent} from './components/footer/footer.component';
import {MovieDetailComponent} from './components/movie-detail/movie-detail.component';
import {ActorCardComponent} from './components/movie-detail/actor-card/actor-card.component';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ShowcaseComponent} from './components/common/showcase/showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieLandingPageComponent,
    NavBarComponent,
    MovieCardComponent,
    MovieDetailComponent,
    FooterComponent,
    ActorCardComponent,
    FavoritesComponent,
    LoginComponent,
    RegisterComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
