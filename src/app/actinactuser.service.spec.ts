import { TestBed } from '@angular/core/testing';

import { ActinactuserService } from './actinactuser.service';

describe('ActinactuserService', () => {
  let service: ActinactuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActinactuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
