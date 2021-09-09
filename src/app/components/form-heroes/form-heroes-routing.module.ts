import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormHeroesComponent } from './form-heroes.component';


const routes: Routes = [
  { path: '',
    component: FormHeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormHeroesRoutingModule { }
