import { TestBed } from '@angular/core/testing';

import { VriendenService } from './vrienden.service';

describe('VriendenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VriendenService = TestBed.get(VriendenService);
    expect(service).toBeTruthy();
  });
});
