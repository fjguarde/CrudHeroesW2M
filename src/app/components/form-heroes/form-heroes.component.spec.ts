import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { TranslateModule } from '@ngx-translate/core'
import { FormHeroesComponent } from './form-heroes.component'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeroesService } from '../../services/heroes.service'
import { Observable, of } from 'rxjs'

describe('FormHeroesComponent', () => {
  let component: FormHeroesComponent
  let fixture: ComponentFixture<FormHeroesComponent>
  let matSnackBar: MatSnackBar
  let heroesService: HeroesService

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
        {provider: MatSnackBar, useValue: matSnackBar},
        {provider: HeroesService, useValue: heroesService}
      ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHeroesComponent)
    component = fixture.componentInstance
    matSnackBar = TestBed.inject(MatSnackBar)
    heroesService = TestBed.inject(HeroesService)
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

  it('getHeroeById should be called on init', () => {
    const spyHeroesService = spyOn(heroesService, 'getHeroeById').and.callFake(() => {return of([mockForm])})
    component.ngOnInit()
    expect(spyHeroesService).toHaveBeenCalled()
  })

  it('updateHero should call to heroesService updateHero', () => {
    const spyHeroesService = spyOn(heroesService, 'updateHero').and.callFake(() => {return of(mockForm)})
    component.onSubmitForm(mockForm)
    expect(spyHeroesService).toHaveBeenCalled()
  })
})
