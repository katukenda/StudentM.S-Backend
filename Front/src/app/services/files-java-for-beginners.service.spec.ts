import { TestBed } from '@angular/core/testing';

import { FilesJavaForBeginnersService } from './files-java-for-beginners.service';

describe('FilesJavaForBeginnersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilesJavaForBeginnersService = TestBed.get(FilesJavaForBeginnersService);
    expect(service).toBeTruthy();
  });
});
