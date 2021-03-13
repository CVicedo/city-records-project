import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { RecordsService } from './records.service'

describe('RecordsService', () => {
  let service: RecordsService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]

    })
    service = TestBed.inject(RecordsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
