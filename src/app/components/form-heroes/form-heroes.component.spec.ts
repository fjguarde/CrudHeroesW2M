import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { TranslateModule } from '@ngx-translate/core'
import { FormHeroesComponent } from './form-heroes.component'
import { MatSnackBarModule } from '@angular/material/snack-bar'

describe('FormHeroesComponent', () => {
  let component: FormHeroesComponent
  let fixture: ComponentFixture<FormHeroesComponent>
  const spyTranslateServiceMock  = {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHeroesComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        MatSnackBarModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule],
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHeroesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
