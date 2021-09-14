import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeroesListComponent } from './heroes-list.component'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http'
import { HeroesListRoutingModule } from './heroes-list-routing.module'
import { MatInputModule } from '@angular/material/input'
import { TranslateModule } from '@ngx-translate/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule } from '@angular/forms'
import { ConfirmDialogModule } from '../confirm-dialog/confirm-dialog.module'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'

const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    HeroesListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesListRoutingModule,
    HttpClientModule,
    TranslateModule,
    ConfirmDialogModule,
    ...materialModules,
    MatSnackBarModule
  ],
  exports: []
})
export class HeroesListModule { }
