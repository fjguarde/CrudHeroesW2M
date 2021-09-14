import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeroesListComponent } from './heroes-list.component'
import { MatDialogModule } from '@angular/material/dialog'
import { RouterTestingModule } from '@angular/router/testing'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TranslateModule } from '@ngx-translate/core'
import { HeroesService } from 'src/app/services/heroes.service'
import { Hero } from 'src/app/models/interfaces'
import { Observable } from 'rxjs'

describe('HeroesListComponent', () => {
  let service: HeroesService
  let component: HeroesListComponent
  let fixture: ComponentFixture<HeroesListComponent>
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
      providers: [HeroesService]
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
    spyOn(service, 'getHeroes').and.returnValue(new Observable)
    component.ngOnInit()
    expect(service.getHeroes).toHaveBeenCalled()
  })
})
