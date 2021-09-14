import { TestBed } from '@angular/core/testing'
import { HeroesService } from './heroes.service'
import { Hero } from '../models/interfaces'
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'
import { environment } from 'src/environments/environment'


describe('HeroesService', () => {
  let service: HeroesService
  let httpMock : HttpTestingController
  const heroMock: Hero = {
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
        HttpClientTestingModule
      ]
    })
    service = TestBed.inject(HeroesService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('getHeroes return a list of heroes and does a get method', () => {
    service.getHeroes().subscribe((resp: Hero[]) => {
        expect(resp).toEqual([heroMock])
    })
    const req = httpMock.expectOne(environment.apiUrl + '/heroes')
    expect(req.request.method).toBe('GET')
    req.flush([heroMock])
  })

  it('updateHeroes return a list of heroes and does a post method', () => {
    service.updateHero(heroMock).subscribe((resp: Hero) => {
        expect(resp).toEqual(heroMock)
    })
    const req = httpMock.expectOne(environment.apiUrl + '/heroes')
    expect(req.request.method).toBe('POST')
    req.flush(heroMock)
  })

  it('deleteHero return id of deleted and does a delete method', () => {
    const id = '1'
    service.deleteHero(id).subscribe((resp: string) => {
        expect(resp).toEqual(id)
    })
    const req = httpMock.expectOne(environment.apiUrl + `/heroes?id=${id}`)
    expect(req.request.method).toBe('DELETE')
    req.flush(id)
  })
})
