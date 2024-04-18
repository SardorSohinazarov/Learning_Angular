import { TestBed } from '@angular/core/testing';

import { ProductApService } from './product-ap.service';

describe('ProductApService', () => {
  let service: ProductApService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductApService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
