import { TestBed } from '@angular/core/testing';

import { ConstanceService } from './constance.service';

describe('ConstanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstanceService = TestBed.get(ConstanceService);
    expect(service).toBeTruthy();
  });
});
