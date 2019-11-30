import { TestBed } from '@angular/core/testing';

import { OptieService } from './optie.service';

describe('OptieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptieService = TestBed.get(OptieService);
    expect(service).toBeTruthy();
  });
});
