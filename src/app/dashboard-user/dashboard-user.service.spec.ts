import { TestBed } from '@angular/core/testing';

import { DashboardUserService } from './dashboard-user.service';

describe('DashboardUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardUserService = TestBed.get(DashboardUserService);
    expect(service).toBeTruthy();
  });
});
