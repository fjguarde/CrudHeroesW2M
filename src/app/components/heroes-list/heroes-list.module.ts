import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http'

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
    HttpClientModule,
    ...materialModules
  ],
  exports: [
    HeroesListComponent
  ]
})
export class HeroesListModule { }
