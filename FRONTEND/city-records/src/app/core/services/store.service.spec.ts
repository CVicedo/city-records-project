import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { StoreService } from './store.service'

describe('StoreService', () => {
  let service: StoreService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    service = TestBed.inject(StoreService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
