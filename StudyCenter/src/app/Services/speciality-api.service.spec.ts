import { TestBed } from '@angular/core/testing';

import { SpecialityApiService } from './speciality-api.service';

describe('SpecialityApiService', () => {
  let service: SpecialityApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialityApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
