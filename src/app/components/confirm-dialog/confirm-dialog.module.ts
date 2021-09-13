import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog'
import { ConfirmDialogComponent } from './confirm-dialog.component'
import { TranslateModule } from '@ngx-translate/core'
import { MatButtonModule } from '@angular/material/button'

const materialModules = [
  MatDialogModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    ConfirmDialogComponent],
  imports: [
    CommonModule,
    ...materialModules,
    TranslateModule.forChild()
  ]
})
export class ConfirmDialogModule { }
