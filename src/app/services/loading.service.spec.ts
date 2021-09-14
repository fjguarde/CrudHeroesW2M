import { TestBed } from '@angular/core/testing'

import { LoadingService } from './loading.service'

describe('LoadingService', () => {
  let service: LoadingService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(LoadingService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should getter return the value of private loading property', () => {
    expect(service['loading']).toEqual(service.loading)
  })

  it('should setter change the value of private loading property', () => {
    const newValueLoading = true
    service.loading = newValueLoading
    expect(service['loading']).toEqual(newValueLoading)
  })
})
