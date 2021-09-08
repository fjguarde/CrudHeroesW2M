import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditHeroesComponent } from './new-edit-heroes.component';

describe('NewEditHeroesComponent', () => {
  let component: NewEditHeroesComponent;
  let fixture: ComponentFixture<NewEditHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEditHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
