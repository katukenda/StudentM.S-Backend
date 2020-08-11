import { TestBed } from '@angular/core/testing';

import { AdminUserControlService } from './admin-user-control.service';

describe('AdminUserControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminUserControlService = TestBed.get(AdminUserControlService);
    expect(service).toBeTruthy();
  });
});
