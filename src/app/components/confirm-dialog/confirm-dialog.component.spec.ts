import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogRef } from '@angular/material/dialog'
import { TranslateModule } from '@ngx-translate/core'

import { ConfirmDialogComponent } from './confirm-dialog.component'

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent
  let fixture: ComponentFixture<ConfirmDialogComponent>
  let matDialogRef: MatDialogRefMock
  const matDialogSpy = jasmine.createSpyObj('MatDialogRef', ['close', 'closeDialog'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDialogComponent ],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: matDialogSpy
        },
      ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent)
    component = fixture.componentInstance
    matDialogRef = TestBed.inject(MatDialogRef)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('close should call dialogRef close method', () => {
    component.close(true)
    expect(matDialogSpy.close).toHaveBeenCalled()
  })

  })
  export class MatDialogRefMock {
    close(value = '') {
    }
  }
