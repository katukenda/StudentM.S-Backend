import { TestBed } from '@angular/core/testing';

import { TutorNoticeServiceService } from './tutor-notice-service.service';

describe('TutorNoticeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutorNoticeServiceService = TestBed.get(TutorNoticeServiceService);
    expect(service).toBeTruthy();
  });
});
