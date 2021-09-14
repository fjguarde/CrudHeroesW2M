import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeroesListComponent } from './heroes-list.component'
import { MatDialogModule } from '@angular/material/dialog'
import { RouterTestingModule } from '@angular/router/testing'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TranslateModule } from '@ngx-translate/core'
import { HeroesService } from 'src/app/services/heroes.service'

describe('HeroesListComponent', () => {
  let service: HeroesService
  let component: HeroesListComponent
  let fixture: ComponentFixture<HeroesListComponent>

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
      ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListComponent)
    service = TestBed.inject(HeroesService)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('getHeroes has been called on init', () => {
    spyOn(service, 'getHeroes').and.callThrough
    component.ngOnInit
    expect(service.getHeroes).toHaveBeenCalled
  })
})
