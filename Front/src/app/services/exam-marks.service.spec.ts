import { TestBed } from '@angular/core/testing';

import { ExamMarksService } from './exam-marks.service';

describe('ExamMarksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamMarksService = TestBed.get(ExamMarksService);
    expect(service).toBeTruthy();
  });
});
