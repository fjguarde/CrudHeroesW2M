import { HttpClientModule } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'

import { HeroesService } from './heroes.service'
import { Hero } from '../models/interfaces'
import { Observable } from 'rxjs'


describe('HeroesService', () => {
  let service: HeroesService
  const heroesMock: Hero = {
    id: '0',
    name: 'Batman', 
    publisher: 'DC Comics', 
    alterEgo: 'Bruce Wayne',
    firstAppearance: 'Detective Comics #27',
    characters: 'Bruce Wayne'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    })
    service = TestBed.inject(HeroesService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
