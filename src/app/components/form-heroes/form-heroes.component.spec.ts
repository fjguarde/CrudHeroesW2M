import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FormHeroesComponent } from './form-heroes.component'

describe('FormHeroesComponent', () => {
  let component: FormHeroesComponent
  let fixture: ComponentFixture<FormHeroesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHeroesComponent ]
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
