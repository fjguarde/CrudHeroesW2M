import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog'
import { ConfirmDialogComponent } from './confirm-dialog.component'
import { TranslateModule } from '@ngx-translate/core'


@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    TranslateModule
  ]
})
export class ConfirmDialogModule { }
