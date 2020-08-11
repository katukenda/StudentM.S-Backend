import { TestBed } from '@angular/core/testing';

import { MarksUploadService } from './marks-upload.service';

describe('MarksUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarksUploadService = TestBed.get(MarksUploadService);
    expect(service).toBeTruthy();
  });
});
