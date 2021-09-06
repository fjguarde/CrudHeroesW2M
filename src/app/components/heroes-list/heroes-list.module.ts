import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

const materialModules = [
  MatTableModule,
  MatPaginatorModule
];

@NgModule({
  declarations: [
    HeroesListComponent
  ],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    HeroesListComponent
  ]
})
export class HeroesListModule { }
