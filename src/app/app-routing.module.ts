import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full',
    loadChildren: () => import('./components/heroes-list/heroes-list.module').then(m => m.HeroesListModule)
  },
  { path: 'heroes',
    loadChildren: () => import('./components/heroes-list/heroes-list.module').then(m => m.HeroesListModule)
  },
  { path: 'form-heroes/:id',
    loadChildren: () => import('./components/form-heroes/form-heroes.module').then(m => m.FormHeroesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
