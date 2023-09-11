import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PersonsComponent } from './persons/persons.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { DetailsComponent } from './details/details.component';
import { RegistrationComponent } from './registration/registration.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    NotfoundComponent,
    NavbarComponent,
    HeaderComponent,
    LoginComponent,
    PeopleDetailsComponent,
    PersonsComponent,
    TvShowComponent,
    DetailsComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
