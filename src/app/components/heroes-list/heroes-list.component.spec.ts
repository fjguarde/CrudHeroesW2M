import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HeroesListComponent } from './heroes-list.component'
import { HeroesService } from '../../services/heroes.service'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { LoadingService } from '../../services/loading.service'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientModule } from '@angular/common/http'

describe('HeroesListComponent', () => {
  let component: HeroesListComponent
  let fixture: ComponentFixture<HeroesListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesListComponent ],
      imports: [
        RouterTestingModule,
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule
      ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
