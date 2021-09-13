import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { TranslateModule } from '@ngx-translate/core'

import { FormHeroesComponent } from './form-heroes.component'

describe('FormHeroesComponent', () => {
  let component: FormHeroesComponent
  let fixture: ComponentFixture<FormHeroesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHeroesComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        TranslateModule.forRoot(),
        FormsModule,
        ReactiveFormsModule]
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
