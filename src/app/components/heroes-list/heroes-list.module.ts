import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeroesListComponent } from './heroes-list.component'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http'
import { HeroesListRoutingModule } from './heroes-list-routing.module'
import { MatInputModule } from '@angular/material/input'
import { TranslateModule } from '@ngx-translate/core'

const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatInputModule
]

@NgModule({
  declarations: [
    HeroesListComponent,
  ],
  imports: [
    CommonModule,
    HeroesListRoutingModule,
    HttpClientModule,
    TranslateModule,
    ...materialModules
  ],
  exports: [
    HeroesListComponent
  ]
})
export class HeroesListModule { }
