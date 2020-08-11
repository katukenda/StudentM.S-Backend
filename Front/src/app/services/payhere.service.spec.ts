import { TestBed } from '@angular/core/testing';

import { PayhereService } from './payhere.service';

describe('PayhereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayhereService = TestBed.get(PayhereService);
    expect(service).toBeTruthy();
  });
});
