import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeroesListComponent } from './heroes-list.component'
import { MatDialogModule } from '@angular/material/dialog'
import { RouterTestingModule } from '@angular/router/testing'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TranslateModule } from '@ngx-translate/core'
import { HeroesService } from 'src/app/services/heroes.service'
import { Hero } from 'src/app/models/interfaces'
import { observable, Observable, of } from 'rxjs'
import { Router } from '@angular/router'

describe('HeroesListComponent', () => {
  let service: HeroesService
  let component: HeroesListComponent
  let fixture: ComponentFixture<HeroesListComponent>
  let matSnackBar: MatSnackBar
  let routerSpy = {navigate: jasmine.createSpy('navigate')}
  const heroMock: Hero = {
    id: '0',
    name: 'Batman', 
    publisher: 'DC Comics', 
    alterEgo: 'Bruce Wayne',
    firstAppearance: 'Detective Comics #27',
    characters: 'Bruce Wayne'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesListComponent ],
      imports: [
        RouterTestingModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        TranslateModule.forRoot()
      ],
      providers: [
        HeroesService,
        {provider: MatSnackBar, useValue: matSnackBar},
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListComponent)
    service = TestBed.inject(HeroesService)
    matSnackBar = TestBed.inject(MatSnackBar)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('getHeroes has been called on init', () => {
    spyOn(service, 'getHeroes').and.callFake(() => {return of([heroMock])})
    component.ngOnInit()
    expect(service.getHeroes).toHaveBeenCalled()
  })

  it('openSnackbar should call MatSnackBar open method', () => {
    spyOn(matSnackBar, 'open').and.callFake
    component.openSnackBar('test', 'ok')
    fixture.detectChanges()
    expect(matSnackBar.open).toHaveBeenCalled()
  })

  it('should navigate to edit heroes', () => {
    const id = '0'
    component.newEditHeroe(id)
    expect (routerSpy.navigate).toHaveBeenCalledWith([`form-heroes/${id}`])
 })

 it('filterHero should call loadTable', ()=> {
  const spyLoadTable = spyOn<any>(component, 'loadTable')
  spyOn(service, 'filterHero').and.callFake(() => {return of([heroMock])})
  component.filterHero('Bat')
  expect(spyLoadTable).toHaveBeenCalled()
 })

 it('filterHero should call filterHero in hero service', () => {
  spyOn(service, 'filterHero').and.callFake(() => {return of([heroMock])})
  component.filterHero('xx')
  expect(service.filterHero).toHaveBeenCalled()
})
})
