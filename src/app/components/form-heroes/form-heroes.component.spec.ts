import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { TranslateModule } from '@ngx-translate/core'
import { FormHeroesComponent } from './form-heroes.component'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('FormHeroesComponent', () => {
  let component: FormHeroesComponent
  let fixture: ComponentFixture<FormHeroesComponent>
  let matSnackBar: MatSnackBar

  const mockForm = {
    id: '',
    name: '',
    publisher: '',
    alterEgo: '',
    firstAppearance: '',
    characters: ''
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHeroesComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatSnackBarModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule],
      providers: [
        {provider: MatSnackBar, useValue: matSnackBar}
      ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHeroesComponent)
    component = fixture.componentInstance
    matSnackBar = TestBed.inject(MatSnackBar)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('openSnackbar should call MatSnackBar open method', () => {
    spyOn(matSnackBar, 'open').and.callFake
    component.openSnackBar('test', 'ok')
    fixture.detectChanges()
    expect(matSnackBar.open).toHaveBeenCalled()
  })

  it('Form should have initial values if not recive any data', () => {
    const heroesFormGroup = component.formHero
    expect(heroesFormGroup.value).toEqual(mockForm)
  })
})
