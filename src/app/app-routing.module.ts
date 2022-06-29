import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieDetailsGuard } from './components/movie-details/movie-details.guard';
import { MoviesComponent } from "./components/movies/movies.component";
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PlanetsComponent } from './components/planets/planets.component';

const routes: Routes = [
  { path: 'movies/:id',
    canActivate: [MovieDetailsGuard],
    component: MovieDetailsComponent
  },
  { path: 'movies', component: MoviesComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'planets', component: PlanetsComponent},
  { path: 'about' , component: AboutComponent},
  { path: '', component: HomeComponent},
  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
