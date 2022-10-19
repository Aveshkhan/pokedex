import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PokemonDetailsComponent } from './Components/pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemon-details', component: PokemonDetailsComponent },
  { path: 'pokemon-details/:id', component: PokemonDetailsComponent },
  { path: '', redirectTo: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
