import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormHeroesComponent } from './form-heroes.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormHeroesRoutingModule } from './form-heroes-routing.module'
import { TranslateModule } from '@ngx-translate/core'
import { UpperCaseTextModule } from 'src/app/directives/upper-case-text.module'

@NgModule({
  declarations: [
    FormHeroesComponent
  ],
  imports: [
    CommonModule,
    FormHeroesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    UpperCaseTextModule
  ]
})
export class FormHeroesModule { }
