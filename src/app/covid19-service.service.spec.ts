import { TestBed } from '@angular/core/testing';

import { Covid19ServiceService } from './covid19-service.service';

describe('Covid19ServiceService', () => {
  let service: Covid19ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Covid19ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
