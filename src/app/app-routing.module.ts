import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { PersonsComponent } from './persons/persons.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { MoviesComponent } from './movies/movies.component';
import { DetailsComponent } from './details/details.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home' , canActivate:[authGuard], component: HomeComponent},
  {path: 'people' , canActivate:[authGuard], component:PersonsComponent },
  {path: 'tv' , canActivate:[authGuard], component:TvShowComponent },
  {path: 'movie' , canActivate:[authGuard], component:MoviesComponent },
  {path:'peopledetails/:id' , canActivate:[authGuard], component:PeopleDetailsComponent},
  {path:'details/:mediatype/:id' , canActivate:[authGuard], component:DetailsComponent},
  {path: 'register' ,  component: RegistrationComponent},
  {path: 'login' , component: LoginComponent},
  {path: '**' , component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
