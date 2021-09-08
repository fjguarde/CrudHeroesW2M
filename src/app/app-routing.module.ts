import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { NewEditHeroesComponent } from './components/new-edit-heroes/new-edit-heroes.component';


const routes: Routes = [
  { path: '', component: HeroesListComponent, pathMatch: 'full'},
  { path: 'heroes', component: HeroesListComponent },
  { path: 'heroes-form/:heroe', component: NewEditHeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
