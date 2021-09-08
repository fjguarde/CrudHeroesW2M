import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { FormHeroesComponent } from './components/form-heroes/form-heroes.component';


const routes: Routes = [
  { path: '', component: HeroesListComponent, pathMatch: 'full'},
  { path: 'heroes', component: HeroesListComponent },
  { path: 'heroes-form/:id', component: FormHeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
